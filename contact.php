<?php
/**
 * contact.php — Formulaire de contact morganvisuals.fr
 *
 *   GET  contact.php?token=1  → délivre un jeton signé horodaté (HMAC) + la clé publique Turnstile
 *   POST contact.php          → contrôles anti-spam, puis enregistrement MySQL (si configuré) + e-mail
 *
 * Réponses JSON : { ok: true } ou { ok: false, code: fields|spam|captcha|token|rate|server, fields?: [...] }
 * Les codes sont traduits côté client (js/script.js + js/i18n.js). On ne révèle jamais la règle déclenchée.
 *
 * Secrets : uniquement dans le fichier de config privé, hors dossier public et hors Git
 *   (par défaut /home/hocp8711/private/morganvisuals_config.php, remplaçable par la variable
 *   d'environnement MORGANVISUALS_CONFIG pour les tests locaux).
 * Stockage (rate-limit + journal) : dans le dossier du fichier de config, préfixé "morganvisuals_".
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const TOKEN_MIN_AGE = 3;        // secondes
const TOKEN_MAX_AGE = 7200;     // 2 h
const SCORE_REJECT  = 10;       // score ≥ → refusé
const SCORE_REVIEW  = 4;        // score ≥ → livré avec « [À VÉRIFIER] »
const LOG_MAX_BYTES = 1048576;  // 1 Mo, puis rotation (.1)

function respond(int $code, array $payload): never
{
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

// ---------------------------------------------------------------------------
// 0. CONFIGURATION
// ---------------------------------------------------------------------------

$configPath = getenv('MORGANVISUALS_CONFIG') ?: '/home/hocp8711/private/morganvisuals_config.php';

if (!is_file($configPath)) {
    error_log('contact.php: fichier config introuvable.');
    respond(500, ['ok' => false, 'code' => 'server']);
}

$config = require $configPath;
if (!is_array($config)) {
    error_log('contact.php: config invalide.');
    respond(500, ['ok' => false, 'code' => 'server']);
}

date_default_timezone_set((string)($config['timezone'] ?? 'America/Martinique'));

$storageDir     = rtrim((string)($config['storage_dir'] ?? dirname($configPath)), '/');
$rateDir        = $storageDir . '/morganvisuals_ratelimit';
$logFile        = $storageDir . '/morganvisuals_blocked.log';
$formSecret     = form_secret($config, $storageDir);
$tsSiteKey      = trim((string)($config['turnstile_site_key'] ?? ''));
$tsSecret       = trim((string)($config['turnstile_secret'] ?? ''));
$tsEnabled      = $tsSiteKey !== '' && $tsSecret !== '';
$allowedOrigins = $config['allowed_origins'] ?? ['https://morganvisuals.fr', 'https://www.morganvisuals.fr'];
$allowedHosts   = array_values(array_filter(array_map(
    fn($o) => strtolower((string)parse_url((string)$o, PHP_URL_HOST)),
    $allowedOrigins
)));

$ip = (string)($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
if (!empty($config['test_mode']) && !empty($_SERVER['HTTP_X_TEST_IP'])) {
    $ip = (string)$_SERVER['HTTP_X_TEST_IP']; // tests locaux uniquement (jamais test_mode en prod)
}

/** form_secret : depuis la config ; à défaut, généré une fois et conservé hors du dossier public. */
function form_secret(array $config, string $dir): string
{
    $s = (string)($config['form_secret'] ?? '');
    if (strlen($s) >= 32) {
        return $s;
    }
    $file = $dir . '/morganvisuals_form_secret';
    if (is_file($file) && strlen($s = trim((string)file_get_contents($file))) >= 32) {
        return $s;
    }
    $s = bin2hex(random_bytes(32));
    @file_put_contents($file, $s, LOCK_EX);
    @chmod($file, 0600);
    error_log('contact.php: form_secret absent de la config, secret généré dans ' . $file);
    return $s;
}

// ---------------------------------------------------------------------------
// OUTILS : jeton, origine, journal, limites
// ---------------------------------------------------------------------------

function b64url(string $bin): string
{
    return rtrim(strtr(base64_encode($bin), '+/', '-_'), '=');
}

function issue_token(string $secret): string
{
    $payload = 'v1.' . time() . '.' . b64url(random_bytes(12));
    return $payload . '.' . b64url(hash_hmac('sha256', $payload, $secret, true));
}

/** Retourne 'ok', 'missing', 'invalid', 'too_fast' ou 'expired'. */
function check_token(string $token, string $secret): string
{
    if ($token === '') {
        return 'missing';
    }
    $parts = explode('.', $token);
    if (count($parts) !== 4 || $parts[0] !== 'v1' || !ctype_digit($parts[1])) {
        return 'invalid';
    }
    $payload = $parts[0] . '.' . $parts[1] . '.' . $parts[2];
    if (!hash_equals(b64url(hash_hmac('sha256', $payload, $secret, true)), $parts[3])) {
        return 'invalid';
    }
    $age = time() - (int)$parts[1];
    if ($age < TOKEN_MIN_AGE) {
        return 'too_fast';
    }
    if ($age > TOKEN_MAX_AGE) {
        return 'expired';
    }
    return 'ok';
}

/** Origin (ou à défaut Referer) doit appartenir aux domaines autorisés. */
function origin_ok(array $allowed, bool $required): bool
{
    $origin = (string)($_SERVER['HTTP_ORIGIN'] ?? '');
    if ($origin === '' && !empty($_SERVER['HTTP_REFERER'])) {
        $p = parse_url((string)$_SERVER['HTTP_REFERER']);
        if (!empty($p['scheme']) && !empty($p['host'])) {
            $origin = $p['scheme'] . '://' . $p['host'] . (isset($p['port']) ? ':' . $p['port'] : '');
        }
    }
    if ($origin === '' || $origin === 'null') {
        return !$required;
    }
    return in_array(rtrim(strtolower($origin), '/'), array_map('strtolower', $allowed), true);
}

function excerpt(string $s, int $len = 300): string
{
    return mb_substr(defang(preg_replace('/\s+/u', ' ', $s) ?? ''), 0, $len);
}

/** Journal des blocages : une ligne JSON par événement, hors dossier public, 1 Mo max (rotation .1). */
function log_block(string $file, string $ip, string $reason, array $extra = []): void
{
    if (is_file($file) && filesize($file) > LOG_MAX_BYTES) {
        @rename($file, $file . '.1');
    }
    $line = json_encode(['date' => date('c'), 'ip' => $ip, 'raison' => $reason] + $extra, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    @file_put_contents($file, $line . "\n", FILE_APPEND | LOCK_EX);
    @chmod($file, 0600);
}

/** Un fichier par clé, nommé par HMAC (aucune IP ni e-mail en clair sur le disque). */
function rl_file(string $dir, string $secret, string $key): string
{
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    return $dir . '/' . hash_hmac('sha256', $key, $secret) . '.json';
}

function rl_read(string $file): array
{
    if (!is_file($file)) {
        return [];
    }
    $data = json_decode((string)file_get_contents($file), true);
    return is_array($data) ? $data : [];
}

function rl_update(string $file, callable $fn): void
{
    $fh = @fopen($file, 'c+');
    if (!$fh) {
        error_log('contact.php: rate-limit non inscriptible (' . dirname($file) . ')');
        return;
    }
    flock($fh, LOCK_EX);
    $data = json_decode((string)stream_get_contents($fh), true);
    $data = $fn(is_array($data) ? $data : []);
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, (string)json_encode($data));
    fflush($fh);
    flock($fh, LOCK_UN);
    fclose($fh);
}

function rl_count(string $dir, string $secret, string $key, int $window): int
{
    $now = time();
    $hits = rl_read(rl_file($dir, $secret, $key))['hits'] ?? [];
    return count(array_filter($hits, fn($t) => $t > $now - $window));
}

function rl_hit(string $dir, string $secret, string $key): void
{
    rl_update(rl_file($dir, $secret, $key), function (array $d) {
        $now = time();
        $hits = array_values(array_filter($d['hits'] ?? [], fn($t) => $t > $now - 86400));
        $hits[] = $now;
        return ['hits' => $hits];
    });
}

function ip_banned(string $dir, string $secret, string $ip): bool
{
    return (rl_read(rl_file($dir, $secret, 'ban:' . $ip))['until'] ?? 0) > time();
}

/** Une tentative bloquée de plus pour cette IP : 5 en 1 h → IP bloquée 1 h. */
function record_block(string $dir, string $secret, string $ip): void
{
    rl_update(rl_file($dir, $secret, 'ban:' . $ip), function (array $d) {
        $now = time();
        $fails = array_values(array_filter($d['fails'] ?? [], fn($t) => $t > $now - 3600));
        $fails[] = $now;
        $until = (int)($d['until'] ?? 0);
        if (count($fails) >= 5) {
            $until = $now + 3600;
            $fails = [];
        }
        return ['fails' => $fails, 'until' => $until];
    });
}

/** Ménage occasionnel des fichiers de limites inactifs depuis plus de 2 jours. */
function rl_gc(string $dir): void
{
    if (random_int(1, 50) !== 1 || !is_dir($dir)) {
        return;
    }
    foreach (glob($dir . '/*.json') ?: [] as $f) {
        if (filemtime($f) < time() - 172800) {
            @unlink($f);
        }
    }
}

/** Refus + journal + compteur de récidive. */
function block(int $http, string $code, string $reason, array $extra = []): never
{
    global $logFile, $rateDir, $formSecret, $ip;
    log_block($logFile, $ip, $reason, $extra);
    record_block($rateDir, $formSecret, $ip);
    respond($http, ['ok' => false, 'code' => $code]);
}

// ---------------------------------------------------------------------------
// OUTILS : nettoyage, liens, score de contenu
// ---------------------------------------------------------------------------

/** Retire caractères de contrôle, zero-width et inversions bidi ; normalise en NFC. */
function clean_text(string $s, bool $multiline): string
{
    $s = str_replace(["\r\n", "\r"], "\n", $s);
    $s = preg_replace('/[\x{200B}-\x{200F}\x{202A}-\x{202E}\x{2060}-\x{2064}\x{2066}-\x{2069}\x{061C}\x{FEFF}\x{00AD}]/u', '', $s) ?? '';
    if ($multiline) {
        $s = preg_replace('/[\x00-\x08\x0B-\x1F\x7F\x{80}-\x{9F}]/u', '', $s) ?? '';
    } else {
        $s = preg_replace('/[\x00-\x1F\x7F\x{80}-\x{9F}]/u', ' ', $s) ?? '';
    }
    if (class_exists('Normalizer')) {
        $n = Normalizer::normalize($s, Normalizer::FORM_C);
        if (is_string($n)) {
            $s = $n;
        }
    }
    $s = $multiline
        ? (preg_replace("/\n{4,}/", "\n\n\n", $s) ?? '')
        : (preg_replace('/\s+/u', ' ', $s) ?? '');
    return trim($s);
}

const TLDS = 'com|net|org|fr|io|co|me|info|biz|eu|de|uk|be|ch|ca|us|es|it|nl|pt|pl|ru|su|cn|xyz|top|click|icu|tk|ml|ga|cf|gq|buzz|work|loan|zip|mov|rest|cam|sbs|cfd|bond|monster|live|site|online|shop|store|link|app|dev|pro|tech|art|studio|design|club|vip|win|bid|stream|download|racing|date|review|country|kim|men|party|science|trade|webcam|cyou|today|space|website|email|ly|gl|gd|ee|at|ms|to|cc|tv|ws|mq|gp|re|gf|yt|pm|nc|pf|ht|ai|in|br|mx|jp|kr|asia|mobi|name|gov|edu|int|travel|bio|media|agency|digital|events|music|photo|photography|video|world|life|blog|page|one|fun|gg|nz|au|se|no|dk|fi|ie|lu|ma|sn|ci|tn|dz|quest|lol|mom|beauty|hair|skin|makeup';

/** Lien = avec schéma, www., ou domaine nu sur un TLD connu (les adresses e-mail sont exclues). */
function link_regex(): string
{
    $label = '[a-z0-9\x{00C0}-\x{024F}](?:[a-z0-9\x{00C0}-\x{024F}-]*[a-z0-9\x{00C0}-\x{024F}])?';
    return '~(?<![@\w.-])(?:(?:https?|ftp)://[^\s<>"\'\[\]]+|www\.[^\s<>"\'\[\]]+|(?:' . $label . '\.)+(?:' . TLDS . ')(?![\w@-])(?:[/?#:][^\s<>"\'\[\]]*)?)~iu';
}

function find_links(string $text): array
{
    preg_match_all(link_regex(), $text, $m);
    return array_map(fn($l) => rtrim($l, '.,;:!?\'")»'), $m[0] ?? []);
}

/** hxxps://site[.]com : liens rendus non cliquables dans l'e-mail reçu. */
function defang(string $text): string
{
    return preg_replace_callback(link_regex(), function ($m) {
        $url = preg_replace('~^(h)tt(ps?)://~i', '$1xx$2://', $m[0]) ?? $m[0];
        $url = preg_replace('~^ftp://~i', 'fxp://', $url) ?? $url;
        // Seuls les points du nom d'hôte sont remplacés.
        return preg_replace_callback('~^((?:[a-z]+://)?)([^/?#]+)~i', fn($h) => $h[1] . str_replace('.', '[.]', $h[2]), $url) ?? $url;
    }, $text) ?? $text;
}

function url_part(string $link, int $part): string
{
    $url = preg_match('~^[a-z]+://~i', $link) ? $link : 'http://' . $link;
    return strtolower((string)(parse_url($url, $part) ?? ''));
}

function host_matches(string $host, array $domains): bool
{
    foreach ($domains as $d) {
        if ($host === $d || str_ends_with($host, '.' . $d)) {
            return true;
        }
    }
    return false;
}

/** Minuscules sans accents, pour la recherche de mots-clés. */
function fold(string $s): string
{
    $s = mb_strtolower($s, 'UTF-8');
    if (function_exists('transliterator_transliterate')) {
        $t = transliterator_transliterate('NFD; [:Nonspacing Mark:] Remove; NFC', $s);
        if (is_string($t)) {
            $s = $t;
        }
    }
    return str_replace(['’', '‘'], "'", $s);
}

/**
 * Score de suspicion → [score, raisons[]]. Les raisons ne figurent que dans le journal et
 * dans l'e-mail reçu par Morgan, jamais dans la réponse au visiteur.
 */
function content_score(string $name, string $subject, string $message): array
{
    $score = 0.0;
    $why = [];
    $add = function (float $pts, string $reason) use (&$score, &$why) {
        $score += $pts;
        $why[] = $reason . ' (+' . $pts . ')';
    };
    $text = $subject . "\n" . $message;
    $f = fold($name . "\n" . $text);

    // --- Très suspect : HTML / BBCode ---
    if (preg_match('~<\s*/?\s*(a|p|div|span|img|script|iframe|br|b|i|u|strong|em|html|body|style|font|table|h[1-6]|form|input)\b[^>]*>~i', $text)
        || preg_match('~\bhref\s*=|&lt;\s*a\s~i', $text)) {
        $add(10, 'HTML');
    }
    if (preg_match('~\[(url|link|img|b|i|u|color|size|quote)(=[^\]]*)?\]~i', $text)) {
        $add(10, 'BBCode');
    }
    if (preg_match('~\[[^\]\n]{1,200}\]\((https?://|www\.)~i', $text)) {
        $add(6, 'lien Markdown');
    }

    // --- Liens ---
    $shorteners = ['bit.ly', 'bitly.com', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'is.gd', 'buff.ly', 'rebrand.ly', 'cutt.ly', 'shorturl.at', 'tiny.cc', 'rb.gy', 't.ly', 's.id', 'v.gd', 'qrco.de', 'tr.im', 'clck.ru', 'shorte.st', 'adf.ly', 'bl.ink', 'short.io', 'shorturl.com', 'lnkd.in', 'surl.li', 'u.to', 'x.gd', 'tny.im', 'urlz.fr', 'kutt.it', 'git.io', 'han.gl', 'link.ly'];
    $lowRisk    = ['instagram.com', 'instagr.am', 'facebook.com', 'fb.com', 'fb.me', 'm.me', 'messenger.com', 'youtube.com', 'youtu.be', 'wa.me', 'whatsapp.com', 'linkedin.com', 'tiktok.com', 'behance.net', 'vimeo.com', 'pinterest.com', 'pinterest.fr', 'x.com', 'twitter.com', 'morganvisuals.fr'];
    $fileShare  = ['drive.google.com', 'docs.google.com', 'sites.google.com', 'forms.gle', 'onedrive.live.com', '1drv.ms', 'sharepoint.com', 'dropbox.com', 'db.tt', 'wetransfer.com', 'we.tl', 'mega.nz', 'mega.io', 'mediafire.com', 'box.com', 'icloud.com', 'sendspace.com', 'fromsmash.com', 'swisstransfer.com', 'transfernow.net', 'grosfichiers.com', 'filetransfer.io', 'dl.free.fr', 'pcloud.com', 'docsend.com', 'notion.site', 'canva.com', 'adobe.com', 'ipfs.io', 'firebasestorage.googleapis.com', 'storage.googleapis.com', 'blob.core.windows.net', 'web.app', 'firebaseapp.com', 'r2.dev', 'pages.dev', 'workers.dev', 'glitch.me', 'netlify.app', 'vercel.app', 'weebly.com', 'wixsite.com', 'godaddysites.com', 'webflow.io', 'square.site', 'ngrok.io', 'ngrok-free.app'];
    $riskyTlds  = ['xyz', 'ru', 'su', 'cn', 'top', 'click', 'icu', 'tk', 'ml', 'ga', 'cf', 'gq', 'buzz', 'work', 'loan', 'zip', 'mov', 'rest', 'cam', 'sbs', 'cfd', 'bond', 'monster', 'cyou', 'win', 'bid', 'stream', 'download', 'racing', 'date', 'review', 'country', 'kim', 'men', 'party', 'science', 'trade', 'webcam', 'quest', 'lol', 'mom', 'beauty', 'hair', 'skin', 'makeup'];

    $links = array_values(array_unique(find_links($name . "\n" . $text)));
    $risky = 0;
    $seenFileShare = false;
    foreach ($links as $link) {
        $host  = url_part($link, PHP_URL_HOST);
        $path  = url_part($link, PHP_URL_PATH);
        $tld   = substr((string)strrchr($host, '.'), 1);
        $isMaps = (bool)preg_match('~^(maps\.app\.goo\.gl|maps\.google\.[a-z.]+)$~', $host)
            || (bool)preg_match('~^((www\.)?google\.[a-z.]+|goo\.gl)$~', $host) && str_starts_with($path, '/maps');

        if ($host === '') {
            continue;
        }
        if (filter_var(trim($host, '[]'), FILTER_VALIDATE_IP) || preg_match('~^\d+$~', $host)) {
            $add(10, 'URL avec IP');
            $risky++;
            continue;
        }
        if (str_contains($host, 'xn--') || preg_match('/[^\x00-\x7F]/', $host)) {
            $add(10, 'domaine punycode/IDN');
            $risky++;
            continue;
        }
        if (!$isMaps && host_matches($host, $shorteners)) {
            $add(10, 'raccourcisseur ' . $host);
            $risky++;
            continue;
        }
        if (preg_match('~\.(exe|scr|bat|cmd|msi|msix|apk|js|jse|vbs|vbe|jar|ps1|psm1|wsf|hta|lnk|dmg|pkg|iso|img|reg|cpl|scf|appx)$~', $path)) {
            $add(10, 'lien vers exécutable');
            $risky++;
            continue;
        }
        if (preg_match('~\.(s?html?|xhtml|svgz?|php\d?|aspx?)$~', $path)) {
            // .html est un classique du phishing, mais beaucoup de sites d'associations ont des
            // pages en .html : seul, ce signal ne bloque pas ; combiné à un autre, si.
            $add(6, 'lien vers page .html');
        }
        if (preg_match('~\.(zip|rar|7z|tar|gz|cab|arj)$~', $path)) {
            $add(5, 'lien vers archive');
        }
        if ($isMaps || host_matches($host, $lowRisk)) {
            $add(0.5, 'lien courant ' . $host);
            continue;
        }
        $risky++;
        if (host_matches($host, $fileShare)) {
            $add($seenFileShare ? 2 : 4, 'partage de fichiers ' . $host);
            $seenFileShare = true;
        } elseif (in_array($tld, $riskyTlds, true)) {
            $add(4, 'extension à risque .' . $tld);
        } else {
            $add(1, 'lien ' . $host);
        }
    }
    if ($risky >= 3) {
        $add(10, $risky . ' liens');
    } elseif (count($links) >= 6) {
        $add(10, count($links) . ' liens');
    }

    // --- Vocabulaire (texte en minuscules, sans accents, mots entiers) ---
    $hits = function (array $terms) use ($f): array {
        $found = [];
        foreach ($terms as $t) {
            if (preg_match('~(?<![\p{L}\p{N}])' . preg_quote($t, '~') . '(?![\p{L}\p{N}])~u', $f)) {
                $found[] = $t;
            }
        }
        return $found;
    };
    $spamTerms = [
        // SEO
        'backlink', 'backlinks', 'guest post', 'guest posting', 'link building', 'link insertion', 'seo services', 'seo service', 'seo expert', 'seo agency', 'seo audit', 'audit seo gratuit', 'first page of google', 'page 1 of google', 'top of google', 'rank your website', 'ranking on google', 'google ranking', 'domain authority', 'increase your traffic', 'boost your traffic', 'website traffic', 'organic traffic', 'targeted traffic', 'dofollow', 'do-follow', 'high da', 'pbn', 'sponsored post', 'article sponsorise', 'premiere page de google', 'your website is not ranking',
        // crypto / finance
        'bitcoin', 'btc', 'crypto', 'cryptocurrency', 'cryptomonnaie', 'ethereum', 'usdt', 'binance', 'forex', 'trading bot', 'investment opportunity', "opportunite d'investissement", 'passive income', 'revenu passif', 'airdrop', 'nft', 'double your money', 'recovery of funds',
        // casino / paris
        'casino', 'poker', 'online slots', 'free spins', 'jackpot', 'betting', 'paris sportifs', 'bookmaker', '1xbet', 'roulette',
        // loterie / arnaques
        'lottery', 'loterie', 'you have won', 'vous avez gagne', 'claim your prize', 'reclamer votre gain', 'inheritance', 'beneficiary', 'million dollars', 'millions de dollars', 'next of kin',
        // adulte / pharma
        'viagra', 'cialis', 'porn', 'escort', 'hookup', 'sex dating',
    ];
    foreach ($hits($spamTerms) as $t) {
        $add(4, 'vocabulaire spam « ' . $t . ' »');
    }
    $phishTerms = [
        'kindly', 'view the contract', 'view contract', 'view the document', 'view document', 'review the document', 'review and sign', 'shared a document', 'shared a file', 'shared with you', 'sign in', 'signin', 'log in', 'login to', 'verify your account', 'confirm your account', 'account suspended', 'your account will', 'update your payment', 'password', 'mot de passe', 'click here', 'click the link', 'click below', 'cliquez ici', 'cliquez sur le lien', 'confirmer votre compte', 'verifier votre compte', 'document partage', 'consulter le document', 'voir le contrat', 'telecharger le document', 'pending document', 'secure document', 'access the file', 'access the document', 'docusign', 'e-signature', 'invoice attached', 'outstanding invoice', 'facture impayee', 'wire transfer', 'virement urgent', 'gift card', 'carte cadeau', 'telegram',
    ];
    foreach ($hits($phishTerms) as $t) {
        $add(3, 'formule de phishing « ' . $t . ' »');
    }

    // --- Alphabets inhabituels (site FR/EN) ---
    $nAll   = preg_match_all('/\p{L}/u', $text);
    $nOther = preg_match_all('/(?!\p{Latin})\p{L}/u', $text);
    if ($nOther >= 5 && $nAll > 0 && $nOther / $nAll >= 0.2) {
        $add(4, 'alphabet inhabituel');
    }
    if (preg_match('/(?=[\p{L}]*\p{Latin})(?=[\p{L}]*[\p{Cyrillic}\p{Greek}])[\p{L}]{3,}/u', $name . ' ' . $text)) {
        $add(6, "mélange d'alphabets dans un mot");
    }

    return [$score, $why];
}

const DISPOSABLE = ['yopmail.com', 'yopmail.fr', 'yopmail.net', 'mailinator.com', 'mailinator.net', 'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org', 'guerrillamailblock.com', 'grr.la', 'sharklasers.com', 'spam4.me', '10minutemail.com', '10minutemail.net', 'temp-mail.org', 'temp-mail.io', 'tempmail.com', 'tempmail.net', 'tempmailo.com', 'tempr.email', 'tmpmail.org', 'tmpmail.net', 'throwawaymail.com', 'trashmail.com', 'trashmail.de', 'trashmail.net', 'getnada.com', 'nada.email', 'maildrop.cc', 'dispostable.com', 'fakeinbox.com', 'mailnesia.com', 'mintemail.com', 'mohmal.com', 'emailondeck.com', 'spamgourmet.com', 'mailcatch.com', 'jetable.org', 'jetable.net', 'moakt.com', 'mail-temp.com', 'discard.email', 'mytemp.email', 'burnermail.io', 'minuteinbox.com', 'cool.fr.nf', 'courriel.fr.nf', 'moncourrier.fr.nf', 'monemail.fr.nf', 'monmail.fr.nf', 'speed.1s.fr', 'mailpoof.com', 'inboxkitten.com', 'emailfake.com', 'generator.email', '1secmail.com', '1secmail.net', '1secmail.org', 'tmail.ws', 'mailtemp.net', 'spambox.us', 'mailforspam.com', 'tempinbox.com', 'dropmail.me', 'emltmp.com', 'mail.tm', 'tempail.com', 'harakirimail.com', 'anonbox.net'];

/** Clé de limite par e-mail : minuscules, sans +étiquette, points Gmail ignorés. */
function email_key(string $email): string
{
    [$local, $domain] = explode('@', strtolower($email), 2);
    $local = explode('+', $local, 2)[0];
    if (in_array($domain, ['gmail.com', 'googlemail.com'], true)) {
        $local = str_replace('.', '', $local);
        $domain = 'gmail.com';
    }
    return $local . '@' . $domain;
}

function domain_exists(string $domain): bool
{
    if (function_exists('idn_to_ascii')) {
        $domain = idn_to_ascii($domain, IDNA_DEFAULT, INTL_IDNA_VARIANT_UTS46) ?: $domain;
    }
    $d = rtrim($domain, '.') . '.';
    return checkdnsrr($d, 'MX') || checkdnsrr($d, 'A') || checkdnsrr($d, 'AAAA');
}

/** Retourne 'ok', 'fail' (refus Cloudflare) ou 'unavailable' (Cloudflare injoignable). */
function verify_turnstile(string $secret, string $token, string $ip, array $hosts, ?array &$detail): string
{
    $detail = null;
    if ($token === '' || strlen($token) > 2048) {
        return 'fail';
    }
    $fields = http_build_query(['secret' => $secret, 'response' => $token, 'remoteip' => $ip]);
    $url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $fields, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8, CURLOPT_CONNECTTIMEOUT => 4]);
        $raw = curl_exec($ch);
    } else {
        $raw = @file_get_contents($url, false, stream_context_create(['http' => ['method' => 'POST', 'header' => "Content-Type: application/x-www-form-urlencoded\r\n", 'content' => $fields, 'timeout' => 8]]));
    }
    $res = is_string($raw) ? json_decode($raw, true) : null;
    if (!is_array($res)) {
        return 'unavailable';
    }
    $detail = $res;
    if (($res['success'] ?? false) !== true) {
        return 'fail';
    }
    // Les clés de test Cloudflare renvoient hostname=example.com sans action : ces champs ne sont pas contrôlés.
    $isTest = preg_match('/^[123]x0{20,}/', $secret) && !empty($res['metadata']['result_with_testing_key']);
    if (!$isTest) {
        if (!in_array(strtolower((string)($res['hostname'] ?? '')), $hosts, true)) {
            return 'fail';
        }
        if (($res['action'] ?? '') !== 'contact') {
            return 'fail';
        }
    }
    return 'ok';
}

// ---------------------------------------------------------------------------
// 1. JETON (GET contact.php?token=1)
// ---------------------------------------------------------------------------

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET' && isset($_GET['token'])) {
    if (!origin_ok($allowedOrigins, false)) {
        respond(403, ['ok' => false, 'code' => 'captcha']);
    }
    respond(200, ['ok' => true, 'token' => issue_token($formSecret), 'siteKey' => $tsEnabled ? $tsSiteKey : null]);
}

if ($method !== 'POST') {
    respond(405, ['ok' => false, 'code' => 'server']);
}

// ---------------------------------------------------------------------------
// 2. CONTRÔLES (du moins coûteux au plus coûteux)
// ---------------------------------------------------------------------------

rl_gc($rateDir);

// 2.1 IP récidiviste (5 tentatives bloquées en 1 h → bloquée 1 h)
if (ip_banned($rateDir, $formSecret, $ip)) {
    log_block($logFile, $ip, 'ip_bloquee');
    respond(429, ['ok' => false, 'code' => 'rate']);
}

// 2.2 Origine
if (!origin_ok($allowedOrigins, true)) {
    block(403, 'captcha', 'origine', ['origin' => $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '')]);
}

$raw = [
    'name'    => (string)($_POST['name'] ?? ''),
    'email'   => (string)($_POST['email'] ?? ''),
    'subject' => (string)($_POST['subject'] ?? ''),
    'message' => (string)($_POST['message'] ?? ''),
];

// 2.3 Honeypots → fausse réussite (le bot croit avoir réussi et ne réessaie pas)
if (trim((string)($_POST['website'] ?? '')) !== '' || trim((string)($_POST['_gotcha'] ?? '')) !== '') {
    log_block($logFile, $ip, 'honeypot', ['email' => mb_substr($raw['email'], 0, 100), 'extrait' => excerpt($raw['message'])]);
    record_block($rateDir, $formSecret, $ip);
    respond(200, ['ok' => true]);
}

// 2.4 Jeton signé horodaté
$tokenState = check_token((string)($_POST['form_token'] ?? ''), $formSecret);
if ($tokenState !== 'ok') {
    block(403, 'token', 'jeton_' . $tokenState, ['extrait' => excerpt($raw['message'], 120)]);
}

// 2.5 UTF-8 valide + injection d'en-tête
foreach ($raw as $k => $v) {
    if (!mb_check_encoding($v, 'UTF-8')) {
        block(400, 'spam', 'utf8_invalide', ['champ' => $k]);
    }
}
foreach (['name', 'email', 'subject'] as $k) {
    if (preg_match('/[\r\n]|%0[ad]/i', $raw[$k]) || ($k !== 'subject' && preg_match('/\b(bcc|cc|to|content-type)\s*:/i', $raw[$k]))) {
        block(400, 'spam', 'injection_entete', ['champ' => $k, 'extrait' => excerpt($raw[$k], 120)]);
    }
}

// 2.6 Limites par IP et globale (avant Turnstile et DNS, pour économiser ces appels)
if (rl_count($rateDir, $formSecret, 'ip:' . $ip, 60) >= 1
    || rl_count($rateDir, $formSecret, 'ip:' . $ip, 3600) >= 5) {
    log_block($logFile, $ip, 'limite_ip');
    respond(429, ['ok' => false, 'code' => 'rate']);
}
if (rl_count($rateDir, $formSecret, 'global', 3600) >= 30) {
    log_block($logFile, $ip, 'limite_globale');
    respond(429, ['ok' => false, 'code' => 'rate']);
}

// 2.7 Cloudflare Turnstile (seulement si les deux clés sont configurées)
$extraWhy = [];
if ($tsEnabled) {
    $ts = verify_turnstile($tsSecret, (string)($_POST['cf_turnstile'] ?? ''), $ip, $allowedHosts, $tsDetail);
    if ($ts === 'fail') {
        block(403, 'captcha', 'turnstile', ['cf' => $tsDetail['error-codes'] ?? null, 'extrait' => excerpt($raw['message'], 120)]);
    }
    if ($ts === 'unavailable') {
        // Cloudflare injoignable : on ne bloque pas un vrai client, le message est signalé « à vérifier ».
        error_log('contact.php: siteverify Turnstile injoignable');
        $extraWhy[] = 'vérification Turnstile indisponible (+4)';
    }
}

// 2.8 Nettoyage + validation
$name    = clean_text($raw['name'], false);
$email   = strtolower(clean_text($raw['email'], false));
$subject = clean_text($raw['subject'], false);
$message = clean_text($raw['message'], true);

$errors = [];
$nameHasLink = (bool)preg_match('~www\.|://|@|\b[\p{L}\p{N}-]+\.(' . TLDS . ')\b~iu', $name);
if (mb_strlen($name) < 2 || mb_strlen($name) > 80
    || !preg_match("/^[\p{L}\p{M}\p{N} '’.\-]+$/u", $name)
    || !preg_match('/\p{L}/u', $name)
    || $nameHasLink) {
    $errors[] = 'name';
}
$emailDomain = '';
if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
} else {
    $emailDomain = substr($email, strrpos($email, '@') + 1);
}
if (mb_strlen($subject) > 150) {
    $errors[] = 'subject';
}
$msgLen = mb_strlen($message);
if ($msgLen < 10 || $msgLen > 5000) {
    $errors[] = 'message';
}
// Domaine e-mail jetable ou inexistant (DNS seulement si le reste est valide)
if (!$errors) {
    if (host_matches($emailDomain, DISPOSABLE)) {
        $errors[] = 'email';
        log_block($logFile, $ip, 'email_jetable', ['email' => $email]);
    } elseif (!domain_exists($emailDomain)) {
        $errors[] = 'email';
        log_block($logFile, $ip, 'email_domaine_inexistant', ['email' => $email]);
    }
}
if ($errors) {
    if ($nameHasLink) {
        log_block($logFile, $ip, 'lien_dans_nom', ['nom' => excerpt($name, 80)]);
        record_block($rateDir, $formSecret, $ip);
    }
    respond(422, ['ok' => false, 'code' => 'fields', 'fields' => array_values(array_unique($errors))]);
}
if ($subject === '') {
    $subject = 'Nouveau message depuis morganvisuals.fr';
}

// 2.9 Limites par e-mail et message identique (toutes IP confondues)
$emailKey = 'email:' . email_key($email);
$msgKey   = 'msg:' . hash('sha256', preg_replace('/[^\p{L}\p{N}]+/u', '', fold($message)) ?? '');
if (rl_count($rateDir, $formSecret, $emailKey, 3600) >= 2
    || rl_count($rateDir, $formSecret, $emailKey, 86400) >= 5) {
    log_block($logFile, $ip, 'limite_email', ['email' => $email]);
    respond(429, ['ok' => false, 'code' => 'rate']);
}
if (rl_count($rateDir, $formSecret, $msgKey, 86400) >= 1) {
    log_block($logFile, $ip, 'message_identique', ['email' => $email, 'extrait' => excerpt($message, 120)]);
    respond(429, ['ok' => false, 'code' => 'rate']);
}

// 2.10 Filtre de contenu par score
[$score, $why] = content_score($name, $subject, $message);
if ($extraWhy) {
    $score += 4;
    $why = array_merge($why, $extraWhy);
}
if ($score >= SCORE_REJECT) {
    block(400, 'spam', 'contenu', ['score' => $score, 'raisons' => $why, 'email' => $email, 'extrait' => excerpt($subject . ' | ' . $message)]);
}
$toReview = $score >= SCORE_REVIEW;
if ($toReview) {
    log_block($logFile, $ip, 'a_verifier_livre', ['score' => $score, 'raisons' => $why, 'email' => $email, 'extrait' => excerpt($subject . ' | ' . $message)]);
}

// ---------------------------------------------------------------------------
// 3. ENREGISTREMENT MYSQL (si configuré) + ENVOI EMAIL
// ---------------------------------------------------------------------------

$nameParts = preg_split('/\s+/u', $name, 2) ?: [];
$prenom    = ($nameParts[0] ?? '') !== '' ? $nameParts[0] : 'Non renseigné';
$nom       = ($nameParts[1] ?? '') !== '' ? $nameParts[1] : 'Non renseigné';
$userAgent = mb_substr(clean_text((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), false), 0, 255);

$stored = false;
if (!empty($config['db_host']) && !empty($config['db_name']) && ($config['db_enabled'] ?? true)) {
    try {
        $pdo = new PDO(
            'mysql:host=' . $config['db_host'] . ';dbname=' . $config['db_name'] . ';charset=utf8mb4',
            (string)($config['db_user'] ?? ''),
            (string)($config['db_pass'] ?? ''),
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false]
        );
        $stmt = $pdo->prepare('
            INSERT INTO contact_messages (prenom, nom, email, message, ip_address, user_agent, status)
            VALUES (:prenom, :nom, :email, :message, :ip_address, :user_agent, :status)
        ');
        $stmt->execute([
            ':prenom'     => $prenom,
            ':nom'        => $nom,
            ':email'      => $email,
            ':message'    => ($toReview ? '[À VÉRIFIER] ' : '') . 'Sujet : ' . $subject . "\n\n" . $message,
            ':ip_address' => $ip,
            ':user_agent' => $userAgent,
            ':status'     => 'new',
        ]);
        $stored = true;
    } catch (PDOException $e) {
        error_log('contact.php MySQL: ' . $e->getMessage());
    }
}

$body = '';
if ($toReview) {
    $body .= "⚠️  MESSAGE À VÉRIFIER (score {$score})\n";
    $body .= "Ce message contient des éléments inhabituels. Les liens ont été désactivés :\n";
    $body .= "ne les ouvrez pas et ne donnez aucun identifiant avant d'avoir vérifié l'expéditeur.\n";
    $body .= 'Détails : ' . implode(' ; ', $why) . "\n";
    $body .= "================================================\n\n";
}
$body .= "Nouveau message depuis le formulaire de contact\n";
$body .= "------------------------------------------------\n\n";
$body .= 'Nom complet : ' . defang($name) . "\n";
$body .= "Email       : {$email}\n";
$body .= 'Sujet       : ' . defang($subject) . "\n";
$body .= "IP          : {$ip}\n";
$body .= 'Date        : ' . date('d/m/Y H:i') . "\n\n";
$body .= "Message :\n" . defang($message) . "\n\n";
$body .= "------------------------------------------------\n";
$body .= "Liens désactivés (hxxps://site[.]com) : recopiez-les à la main si besoin.\n";

$fromAddress = (string)($config['from_address'] ?? '');
$fromName    = (string)($config['from_name'] ?? "Morgan Visual's");
$recipient   = (string)($config['recipient'] ?? '');
$enc = fn(string $s): string => mb_encode_mimeheader($s, 'UTF-8', 'B', "\r\n");

$sent = false;
if (filter_var($fromAddress, FILTER_VALIDATE_EMAIL) && filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
    $headers  = 'From: ' . $enc(str_replace(["\r", "\n", '"', '<', '>'], '', $fromName)) . " <{$fromAddress}>\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: quoted-printable\r\n";
    $headers .= "X-Contact-Score: {$score}";
    $mailSubject = ($toReview ? '[À VÉRIFIER] ' : '') . '[Contact] ' . defang($subject);
    $sent = mail($recipient, $enc($mailSubject), quoted_printable_encode($body), $headers, '-f' . $fromAddress);
    if (!$sent) {
        error_log('contact.php: email non envoyé' . ($stored ? ' (message enregistré en base)' : ''));
    }
} else {
    error_log('contact.php: from_address / recipient manquant ou invalide dans la config');
}

if (!$sent && !$stored) {
    // Rien n'a été conservé : l'envoi n'est pas compté, le visiteur peut réessayer.
    respond(500, ['ok' => false, 'code' => 'server']);
}

// Compté uniquement après réussite (une panne ne bloque pas un vrai client qui réessaie).
rl_hit($rateDir, $formSecret, 'ip:' . $ip);
rl_hit($rateDir, $formSecret, 'global');
rl_hit($rateDir, $formSecret, $emailKey);
rl_hit($rateDir, $formSecret, $msgKey);

respond(200, ['ok' => true]);

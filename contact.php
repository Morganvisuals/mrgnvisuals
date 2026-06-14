<?php
/**
 * contact.php — Formulaire de contact morganvisuals.fr
 * Envoie un email + enregistre le message dans MySQL.
 */

header('Content-Type: application/json; charset=utf-8');

function respond(int $code, array $payload) {
    http_response_code($code);
    echo json_encode($payload);
    exit;
}

// Charger la configuration privée hors GitHub
$configPath = '/home/hocp8711/private/morganvisuals_config.php';

if (!file_exists($configPath)) {
    error_log('contact.php: fichier config introuvable.');
    respond(500, ['ok' => false, 'error' => 'Configuration serveur manquante.']);
}

$config = require $configPath;

// Accepter uniquement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Méthode non autorisée.']);
}

// Honeypot anti-spam
if (!empty($_POST['_gotcha'])) {
    respond(200, ['ok' => true]);
}

// Récupération des champs
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validation
$errors = [];

if ($name === '') {
    $errors[] = 'name';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}

if ($message === '') {
    $errors[] = 'message';
}

if ($errors) {
    respond(422, [
        'ok' => false,
        'error' => 'Champs invalides.',
        'fields' => $errors
    ]);
}

// Si le sujet est vide
if ($subject === '') {
    $subject = 'Nouveau message depuis morganvisuals.fr';
}

// Ta table MySQL demande prenom + nom.
// Comme ton formulaire utilise "name", on découpe automatiquement.
$nameParts = preg_split('/\s+/', $name, 2);

$prenom = $nameParts[0] ?? '';
$nom    = $nameParts[1] ?? 'Non renseigné';

// Si jamais le visiteur écrit juste "Morgan", nom devient "Non renseigné"
if ($prenom === '') {
    $prenom = 'Non renseigné';
}

if ($nom === '') {
    $nom = 'Non renseigné';
}

// Préparer le message stocké en base
$fullMessage = "Sujet : " . $subject . "\n\n" . $message;

// Infos techniques
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? null;
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? null;

// ---------------------------------------------------------------------------
// 1. ENREGISTREMENT MYSQL
// ---------------------------------------------------------------------------

try {
    $pdo = new PDO(
        'mysql:host=' . $config['db_host'] . ';dbname=' . $config['db_name'] . ';charset=utf8mb4',
        $config['db_user'],
        $config['db_pass'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );

    $stmt = $pdo->prepare("
        INSERT INTO contact_messages 
        (prenom, nom, email, message, ip_address, user_agent, status)
        VALUES
        (:prenom, :nom, :email, :message, :ip_address, :user_agent, :status)
    ");

    $stmt->execute([
        ':prenom' => $prenom,
        ':nom' => $nom,
        ':email' => $email,
        ':message' => $fullMessage,
        ':ip_address' => $ipAddress,
        ':user_agent' => $userAgent,
        ':status' => 'new',
    ]);

} catch (PDOException $e) {
    error_log('contact.php MySQL: ' . $e->getMessage());

    respond(500, [
        'ok' => false,
        'error' => 'Erreur lors de l’enregistrement du message.'
    ]);
}

// ---------------------------------------------------------------------------
// 2. ENVOI EMAIL
// ---------------------------------------------------------------------------

$body  = "Nouveau message depuis le formulaire de contact\n";
$body .= "------------------------------------------------\n\n";
$body .= "Nom complet : {$name}\n";
$body .= "Prénom      : {$prenom}\n";
$body .= "Nom         : {$nom}\n";
$body .= "Email       : {$email}\n";
$body .= "Sujet       : {$subject}\n";
$body .= "IP          : {$ipAddress}\n\n";
$body .= "Message :\n{$message}\n";

$safeFromName = str_replace(["\r", "\n"], '', $config['from_name']);
$safeEmail    = str_replace(["\r", "\n"], '', $email);
$safeSubject  = str_replace(["\r", "\n"], '', $subject);

$headers  = "From: {$safeFromName} <{$config['from_address']}>\r\n";
$headers .= "Reply-To: {$safeEmail}\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$mailSubject = '[Contact] ' . $safeSubject;

$sent = mail($config['recipient'], $mailSubject, $body, $headers);

if (!$sent) {
    error_log('contact.php: email non envoyé, mais message enregistré en base.');

    respond(200, [
        'ok' => true,
        'warning' => 'Message enregistré, mais email non envoyé.'
    ]);
}

// Réponse finale pour ton JavaScript
respond(200, ['ok' => true]);
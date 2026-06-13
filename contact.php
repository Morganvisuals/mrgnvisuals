<?php
/**
 * contact.php — Traitement du formulaire de contact (o2switch / morganvisuals.fr)
 *
 * Reçoit le POST du <form class="modern-form"> de index.html, valide les
 * champs, bloque les bots (honeypot), envoie l'email, et répond en JSON
 * (le JS de js/script.js attend du JSON et vérifie response.ok).
 *
 * Pour activer l'enregistrement en base MySQL plus tard : décommenter le
 * bloc « ENREGISTREMENT MYSQL » plus bas et renseigner $db_* ci-dessous.
 */

// ---------------------------------------------------------------------------
// CONFIGURATION — à adapter dans l'espace o2switch
// ---------------------------------------------------------------------------

// Adresse qui reçoit les messages.
$recipient = 'morganrmx85@gmail.com';

// Expéditeur : DOIT être une adresse de TON domaine, sinon o2switch rejette
// le mail comme spam. Crée par ex. contact@morganvisuals.fr dans cPanel.
$from_address = 'contact@morganvisuals.fr';
$from_name    = 'Site morganvisuals.fr';

// Paramètres MySQL (laisser tels quels tant que la base n'est pas créée).
$db_host = 'localhost';
$db_name = '';   // ex. 'sc1abc_contact'
$db_user = '';   // ex. 'sc1abc_morgan'
$db_pass = '';

// ---------------------------------------------------------------------------
// RÉPONSE JSON
// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');

function respond(int $code, array $payload) {
    http_response_code($code);
    echo json_encode($payload);
    exit;
}

// N'accepter que le POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Méthode non autorisée.']);
}

// ---------------------------------------------------------------------------
// ANTI-SPAM — honeypot
// ---------------------------------------------------------------------------

// Le champ _gotcha est invisible pour un humain : s'il est rempli, c'est un bot.
// On renvoie 200 « ok » pour ne pas signaler au bot qu'il a été filtré.
if (!empty($_POST['_gotcha'])) {
    respond(200, ['ok' => true]);
}

// ---------------------------------------------------------------------------
// VALIDATION
// ---------------------------------------------------------------------------

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];
if ($name === '')    { $errors[] = 'name'; }
if ($message === '') { $errors[] = 'message'; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors[] = 'email'; }

if ($errors) {
    respond(422, ['ok' => false, 'error' => 'Champs invalides.', 'fields' => $errors]);
}

// Sujet par défaut si vide.
if ($subject === '') {
    $subject = 'Nouveau message depuis morganvisuals.fr';
}

// ---------------------------------------------------------------------------
// ENVOI DE L'EMAIL
// ---------------------------------------------------------------------------

$body  = "Nouveau message depuis le formulaire de contact\n";
$body .= "------------------------------------------------\n\n";
$body .= "Nom     : {$name}\n";
$body .= "Email   : {$email}\n";
$body .= "Sujet   : {$subject}\n\n";
$body .= "Message :\n{$message}\n";

// En-têtes : nettoyés contre l'injection (pas de retour ligne dans email/nom).
$safe_from_name = str_replace(["\r", "\n"], '', $from_name);
$safe_email     = str_replace(["\r", "\n"], '', $email);

$headers  = "From: {$safe_from_name} <{$from_address}>\r\n";
$headers .= "Reply-To: {$safe_email}\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$mail_subject = '[Contact] ' . str_replace(["\r", "\n"], '', $subject);

$sent = mail($recipient, $mail_subject, $body, $headers);

// ---------------------------------------------------------------------------
// ENREGISTREMENT MYSQL — à activer plus tard
// ---------------------------------------------------------------------------
// 1) Crée une base + un utilisateur dans cPanel o2switch.
// 2) Crée la table :
//
//    CREATE TABLE messages (
//        id        INT AUTO_INCREMENT PRIMARY KEY,
//        name      VARCHAR(255) NOT NULL,
//        email     VARCHAR(255) NOT NULL,
//        subject   VARCHAR(255),
//        message   TEXT NOT NULL,
//        ip        VARCHAR(45),
//        created_at DATETIME NOT NULL
//    );
//
// 3) Renseigne $db_name / $db_user / $db_pass ci-dessus et décommente :
//
// if ($db_name !== '') {
//     try {
//         $pdo = new PDO(
//             "mysql:host={$db_host};dbname={$db_name};charset=utf8mb4",
//             $db_user,
//             $db_pass,
//             [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
//         );
//         $stmt = $pdo->prepare(
//             'INSERT INTO messages (name, email, subject, message, ip, created_at)
//              VALUES (:name, :email, :subject, :message, :ip, NOW())'
//         );
//         $stmt->execute([
//             ':name'    => $name,
//             ':email'   => $email,
//             ':subject' => $subject,
//             ':message' => $message,
//             ':ip'      => $_SERVER['REMOTE_ADDR'] ?? null,
//         ]);
//     } catch (PDOException $e) {
//         // On n'échoue pas la requête si seul le stockage rate : l'email est parti.
//         error_log('contact.php MySQL: ' . $e->getMessage());
//     }
// }

// ---------------------------------------------------------------------------
// RÉPONSE
// ---------------------------------------------------------------------------

if ($sent) {
    respond(200, ['ok' => true]);
}

respond(500, ['ok' => false, 'error' => "L'envoi a échoué, réessaie plus tard."]);

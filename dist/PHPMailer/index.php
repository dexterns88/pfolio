<?php

header('Content-type: application/Json');
header("Access-Control-Allow-Origin: *");

$users = array(
  'admin' => 'Szz?.orJso23LssjIOI2.'
);

$origin = 'dexdev.org';
//$origin = 'dex.loc';

// get user name by key
$usersName = array_keys($users);

// Check if HTTP_ORIGIN exist
if (!array_key_exists('HTTP_REFERER', $_SERVER)) {
  header('HTTP/1.0 401 Unauthorized');
  $output = array(
    'status' => 400,
    'status_message' => 'Only rest api have acceess'
  );
  echo json_encode($output);
  exit;
}

// Check if HTTP_ORIGIN is valid
if (!preg_match('/'.$origin.'/',$_SERVER['HTTP_REFERER'])) {
  header('HTTP/1.0 401 Unauthorized');
  $output = array(
    'status' => 400,
    'status_message' => 'You are not authorized to access this page: #i292ox2'
  );
  echo json_encode($output);
  exit;
}

// Validate auth
if( !isset($_SERVER['PHP_AUTH_USER'])) {
  header('HTTP/1.0 401 Unauthorized');
  $output = array(
    'status' => 400,
    'status_message' => 'You are not authorized to access this page: #i292ox3'
  );
  echo json_encode($output);
  exit;
}

// collect auth
$user = $_SERVER['PHP_AUTH_USER'];
$pass = $_SERVER['PHP_AUTH_PW'];

// validate
$validated = (in_array($user, $usersName)) && ($pass == $users[$user]);

if( !$validated ) {
  header('HTTP/1.0 401 Unauthorized');
  $output = array(
    'status' => 400,
    'status_message' => 'Not authorized'
  );
  echo json_encode($output);
  exit;
}

$data = $_POST;

if( !empty($data['name']) && !empty($data['surname']) && !empty($data['email']) && !empty($data['message']) ) {
  require 'vendor/autoload.php';

  $output = $data;

  $mail = new PHPMailer;

  $mail->setFrom('kravicansmu@gmail.com', 'Portfolio email:');
  $mail->addAddress('dexterns88@gmail.com');
  $mail->isHTML(true);

  $tpl = "<p><b>Name: </b>{$data['name']}</p>
<p><b>Surname: </b>{$data['surname']}</p>
<p><b>Email: </b>{$data['email']}</p>
<p><b>Message: </b>{$data['message']}</p>";

  $tplClean = "Name: {$data['name']}
Surname: {$data['surname']}
Email: {$data['email']}
Message: {$data['message']}";

  $mail->Subject = 'Write to us contact form';
  $mail->Body    = $tpl;
  $mail->AltBody = $tplClean;

  // delete this
  if(!$mail->send()) {
    $output = array(
      'status' => 400,
      'status_message' => $mail->ErrorInfo
    );
  } else {
    $output = array(
      'status' => 200,
      'status_message' => 'Message has been sent'
    );
  }
} else {
  $output = array(
    'status' => 400,
    'status_message' => 'Something is wrong with post method'
  );
}

echo json_encode($output);
<?php

// Error handler
// #i292ox2 - wrong origin access
// #i292ox3 - user auth is not set

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

$data = $_POST;

$users = array(
  'admin' => 'xx'
);
$origin = '192.168.1.102';
//$origin = 'dex.loc';


// get user name by key
$usersName = array_keys($users);


// Check if HTTP_ORIGIN exist
if (!array_key_exists('HTTP_ORIGIN', $_SERVER)) {
  header('HTTP/1.0 401 Unauthorized');
  echo "Only rest api have acceess";
  exit;
}

// Check if HTTP_ORIGIN is valid
if (!preg_match('/'.$origin.'/',$_SERVER['HTTP_ORIGIN'])) {
  $output = "You are not authorized to access this page: #i292ox2";
  header('HTTP/1.0 401 Unauthorized');
  echo $output;
  exit;
}

// Validate auth
if( !isset($_SERVER['PHP_AUTH_USER'])) {
  $output = 'You are not authorized to access this page: #i292ox3';
  header('HTTP/1.0 401 Unauthorized');
  echo $output;
  exit;
}

// collect auth
$user = $_SERVER['PHP_AUTH_USER'];
$pass = $_SERVER['PHP_AUTH_PW'];

// validate
$validated = (in_array($user, $usersName)) && ($pass == $users[$user]);

if( !$validated ) {
  header('HTTP/1.0 401 Unauthorized');
  die ("Not authorized");
}

//$output = array(
//  'status' => 200,
//  'status_message' => 'status ok'
//);
//echo json_encode($output);
//exit;

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
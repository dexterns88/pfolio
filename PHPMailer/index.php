<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

$data = $_POST;
//if( !empty($data['name']) && !empty($data['surname']) && !empty($data['email']) && !empty($data['message']) ) {
//  require 'vendor/autoload.php';
//
//  $output = $data;
//
//  $mail = new PHPMailer;
//
//  $mail->setFrom('kravicansmu@gmail.com', 'Portfolio email:');
//  $mail->addAddress('dexterns88@gmail.com');
//  $mail->isHTML(true);
//
//  $tpl = "<p><b>Name: </b>{$data['name']}</p>
//<p><b>Surname: </b>{$data['surname']}</p>
//<p><b>Email: </b>{$data['email']}</p>
//<p><b>Message: </b>{$data['message']}</p>";
//
//  $tplClean = "Name: {$data['name']}
//Surname: {$data['surname']}
//Email: {$data['email']}
//Message: {$data['message']}";
//
//  $mail->Subject = 'Write to us contact form';
//  $mail->Body    = $tpl;
//  $mail->AltBody = $tplClean;
//
//  if(!$mail->send()) {
//    $output = array(
//      'status' => 400,
//      'status_message' => $mail->ErrorInfo
//    );
//  } else {
//    $output = array(
//      'status' => 200,
//      'status_message' => 'Message has been sent'
//    );
//  }
//} else {
//  $output = array(
//    'status' => 400,
//    'status_message' => 'Something is wrong with post method'
//  );
//}

$output = $data;

echo json_encode( $output );
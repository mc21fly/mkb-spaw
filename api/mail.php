<?php
	
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $to = "mkbspaw@gmail.com";
    $subject = "$data->subject - $data->name" ;
    $txt = "$data->message" . "\r\n" . "Telefon: " . $data->phone;

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$data->mail>" . "\r\n";

    

    mail($to,$subject,$txt,$headers);
?> 
<?php

$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$msg = $_POST['content'];
$fecha_hora_actual = date_default_timezone_set('Y-m-d H:i:s');

 $mensaje = $msg;


//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
    date_default_timezone_set('Etc/UTC');

    require 'PHPMailer-master/PHPMailerAutoload.php';
    require 'PHPMailer-master/class.phpmailer.php';
//Create a new PHPMailer instance
    $mail = new PHPMailer;

//Tell PHPMailer to use SMTP
    $mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
    $mail->SMTPDebug = 1;

//Ask for HTML-friendly debug output
    $mail->Debugoutput = 'html';

//Set the hostname of the mail server
    $mail->Host = 'smtp.dreamhost.com';
// use
//$mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
    $mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
    $mail->SMTPSecure = 'tsl';

//Whether to use SMTP authentication
    $mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
    $mail->Username = "info@margaritacargo.com";

//Password to use for SMTP authentication
    $mail->Password = "mcargo*19";

//Set who the message is to be sent from
    $mail->setFrom('info@margaritacargo.com', $nombre);

//Set an alternative reply-to address
//$mail->addReplyTo($correo, $nombre);
//Set who the message is to be sent to
    $mail->addAddress('info@margaritacargo.com', 'Pregunta');

//Set the subject line
    $mail->Subject = 'Mensaje de '.$nombre.' - '.$correo;

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
    $mail->msgHTML($mensaje);

//Replace the plain text body with one created manually
    $mail->AltBody = 'Gracias por escribir';

//Attach an image file
//$mail->addAttachment($archivo['tmp_name'], $archivo['name']);
    $mail->CharSet = "UTF-8";
//send the message, check for errors
    if (!$mail->send()) {
        echo'0';
    } else {
        echo'1';
    }

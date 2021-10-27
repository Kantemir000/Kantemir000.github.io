<?php 
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;  // Enable verbose debug output

$mail->isSMTP();  // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true; /* мы говорим, что сейчас будем входить в эту почту с нашего аккаунта */// Enable SMTP authentication
$mail->Username = 'fakefake14062002@gmail.com';  // Наш логин
$mail->Password = 'fake1406';  // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';/*  защита  */// Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;  // TCP port to connect to
 
$mail->setFrom('fakefake14062002@gmail.com', 'Heart');  // От кого письмо(можно указать своё имя вместо почты)
$mail->addAddress('fakefake14062002@gmail.com');  /*куда будет приходить это письмо */// Add a recipient
//$mail->addAddress('ellen@example.com'); // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
/* Также можно получать файлы, которые пользователь добавляет в окно файл */
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true); /* Письмо придёт в формате html */// Set email format to HTML

/* Вёрстка, как будет выглядеть письмо */
$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>

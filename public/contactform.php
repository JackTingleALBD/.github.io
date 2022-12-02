<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailfrom = $_POST['mail'];
	$message = $_POST['message'];
	
	$mailTo = "JackTingleALBD@outlook.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an e-mail from ".$name.".\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: index.php?mailsend");


}
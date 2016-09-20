<?php
    if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $school = $_POST['school'];
        $msg = $_POST['msg'];

        $from = 'Start A Chapter Form';
        $to = 'president@sigmaetapi.com';
        $subject = 'SEP - Start a Chapter Form';

        $body = "From: $name\nE-Mail: $email\nPhone Number: $tel\nSchool: $school\nMessage:\n$msg";

        // Check if name has been entered
        if (!$_POST['name']) {
            $errName = 'Please enter your name';
        }

        // Check if email has been entered and is valid
        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }

        //Check if message has been entered
        if (!$_POST['msg']) {
            $errMessage = 'Please enter your message';
        }

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage) {
    if (mail ($to, $subject, $body, $from)) {
        echo "<script>alert('Message sent successfully!'); window.history.go(-1); </script>";
    } else {
        echo "<script>alert('Message did not send successfully'); window.history.go(-1); </script>";
    }
}
    }
?>

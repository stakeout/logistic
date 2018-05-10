<?php
require_once 'class_Mail.php';

if(isset($_POST['subject'],$_POST['name'],$_POST['company'],$_POST['phone'],$_POST['mail'],$_POST['message'])) {
    $errors = [];
    if (empty($_POST['subject'])) {
        $errors['subject'] = 'Напишите тему письма';
    }
    if (empty($_POST['name'])) {
        $errors['name'] = 'Как вас зовут?';
    }
    if (empty($_POST['company'])) {
        $errors['company'] = 'Из какой вы компании?';
    }
    if (empty($_POST['phone'])) {
        $errors['phone'] = 'Ваш номер телефона?';
    }
    if (empty($_POST['mail'])) {
        $errors['mail'] = 'Ваш email?';
    }
    if (empty($_POST['message'])) {
        $errors['message'] = 'напишите нам что-нибудь...';
    }
    if(!count($errors)) {
        Mail::$subject = strip_tags($_POST['subject']);
        Mail::$message = '<body style="margin:0; min-height:100%;background-color:#ccc;">';
        Mail::$message .= '<div style="background-color:#fff; width:800px; margin:0 auto;">';
        Mail::$message .= '<p style="padding:20px;">';
        Mail::$message .= $_POST['name']. " из организации ". $_POST['company']. " прислал сообщение:<br>";
        Mail::$message .= $_POST['message']. '<br>';
        Mail::$message .= 'Связаться с '. $_POST['name']. ' можно по телефону '. $_POST['phone']. 'или электронной почте  <a href=mailto:'. $_POST['mail']. '>'.$_POST['mail'].'</a>';
        Mail::$message .= '</p>';
        Mail::$message .= '</div>';
        Mail::$message .= '</body>';
        Mail::sendMail();
        header("Location: /contacts.php");
        exit;
    }
}


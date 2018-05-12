<?php
class Mail {
    static $subject = '';
    static $from = 'no-reply@tvlogistic.by';
    static $to = 'novash@tut.by';
    static $message = '';
    static $headers = '';

    static function testSend() {
        if(mail(self::$to,'English text','English text')) {
            echo 'Письмо отправлено';
        }else {
            echo 'Письмо не отправлено';
        }
        exit;
    }  // finish test func

    static function sendMail() {
        self::$subject = '=?utf-8?b?'. base64_encode(self::$subject) .'?=';
        self::$headers = "Content-type: text/html; charset=\"utf-8\"\r\n";
        self::$headers .= "From: ".self::$from."\r\n";
        self::$headers .= "MIME-Version: 1.0\r\n";
        self::$headers .= "Date: ".date('D, d M Y H:i:s O')."\r\n";
        self::$headers .= "Precedence: bulk\r\n";

        return mail(self::$to,self::$subject,self::$message,self::$headers);
    }
}

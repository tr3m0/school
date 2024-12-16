<?php
$email = $_GET["email"];
$password = $_GET["password"];

if (empty($email) || empty($password)) {
    echo "Errore: credenziali invalide";
} else {
    echo "Email: $email<br>";
    echo "Password: $password";
}
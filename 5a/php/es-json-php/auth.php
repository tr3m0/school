<?php

function isValidAuth($username, $password, $users) {
    foreach ($users as $user) {
        if ($user["username"] == $username && $user["password"] == $password) {
            return true;
        }
    }
    return false;
}

$users = json_decode(file_get_contents("users.json"), true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login result</title>
</head>
<body>
    <?php
        if (isValidAuth($_POST["username"], $_POST["password"], $users)) {
            echo "<h1>Accesso consentito</h1>";
        } else {
            echo "<h1>Acceso negato</h1>";
        }
    ?>
</body>
</html>
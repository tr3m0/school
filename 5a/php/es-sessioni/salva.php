<?php
    session_start();

    if ($_POST["action"] === "save") {
        if (isset($_POST["username"]) && isset($_POST["password"])) {
            $_SESSION["username"] = $_POST["username"];
            $_SESSION["password"] = $_POST["password"];
        }
    } elseif ($_POST["action"] === "mod") {
        $_SESSION["username"] = $_POST["username"] ?? $_SESSION["username"];
        $_SESSION["password"] = $_POST["password"] ?? $_SESSION["password"];
    } else {
        echo "<p>Error: invalid request</p>";
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sessions</title>
</head>
<body>
    <a href="leggiSessione.php">Read</a>
    <a href="modifica.php">Change</a>
    <a href="distruggi.php">Destroy</a>
</body>
</html>
<?php
    session_start();
    const HOUR = 60 * 60;
    if ($_POST) {
        $_SESSION["counter"] = 0;
    } else {
        $_SESSION["counter"] =
            isset($_SESSION["counter"])
            ? $_SESSION["counter"] + 1
            : 0;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cookie counter</title>
</head>
<body>
    <h1>This page has been visited: <?= $_SESSION["counter"] ?> times</h1>
    <form method="POST">
        <input type="submit" value="Reset">
    </form>
</body>
</html>
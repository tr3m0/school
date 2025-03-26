<?php
    const HOUR = 60 * 60;
    $value = null;
    if ($_POST) {
        $value = 0;
    } else {
        $value = (int)$_COOKIE["counter"] ?? 0;
    }
    setcookie("counter", (string)(++$value), time() + HOUR);
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
    <h1>This page has been visited: <?= $value ?> times</h1>
    <form method="POST">
        <input type="submit" value="Reset">
    </form>
</body>
</html>
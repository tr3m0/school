<?php
    $area = $_GET["height"] * $_GET["width"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Result area</title>
</head>
<body>
    <h1>Result</h1>
    <p>The area of the rectangle <?= $_GET["width"]; ?> x <?= $_GET["height"]; ?> is <?= $area ?>.</p>
</body>
</html>
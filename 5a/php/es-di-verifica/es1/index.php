<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Age average</title>
</head>
<body>
    <form action="es1.php" method="POST">
        <div>
            <label for="person1">Person's 1 age:</label>
            <input type="number" min="0" name="person1" id="person1">
        </div>
        <div>
            <label for="person2">Person's 2 age:</label>
            <input type="number" min="0" name="person2" id="person2">
        </div>
        <button type="submit">Calculate</button>
    </form>
    <div>
        <?php
            $p1 = @$_POST["person1"];
            $p2 = @$_POST["person2"];

            if (isset($p1) && isset($p2)) {
                $result = ($p1 + $p2) / 2;
                echo "<h1>Result</h1>";
                echo "Average = $result";
            }
        ?>
    </div>
</body>
</html>
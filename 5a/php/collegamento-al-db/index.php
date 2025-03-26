<?php
    $db = null;
    if ($_POST) {
        $hostname = $_POST["hostname"];
        $username = $_POST["username"];
        $password = $_POST["password"];
        $dbname = $_POST["dbname"];
        $db = new mysqli($hostname, $username, $password, $dbname);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Database connection</title>
</head>
<body>
    <form method="POST">
        <div>
            <label for="hostname">Hostname</label>
            <input type="text" name="hostname" id="hostname" required>
        </div>
        <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <label for="dbname">Database name</label>
            <input type="text" name="dbname" id="dbname" required>
        </div>
        <input type="submit">
    </form>
    <p>
        <?php
            if ($db) {
                if ($db->connect_errno) {
                    echo $db->connect_error;
                } else {
                    echo "Connected successfully";
                }
                $db->close();
            }
        ?>
    </p>
</body>
</html>
<?php
include('lib/connect.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DB Login Query</title>
</head>
<body>
    <form action="index.php" method="post">
        <div>
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required>
        </div>
        <button type="submit">Invia</button>
    </form>
    <?php if (isset($_POST["username"]) && isset($_POST["password"])) {
        $db = connect();
        $result = $db->query("SELECT id, name, surname FROM Login WHERE login = '$_POST[username]' AND password = '$_POST[password]'");
        $db->close();

        if (isset($result) && $result && $result->num_rows > 0) { ?>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
                <?php  foreach ($result as $row) { ?>
                <tr>
                    <td><?= $row["id"] ?></td>
                    <td><?= $row["name"] ?></td>
                    <td><?= $row["surname"] ?></td>
                </tr>
                <?php } ?>
            </table>
        <?php } else { ?>
            <p>LOGIN O PASSWORD ERRATE</p>
        <?php } ?>
    <?php } ?>
</body>
</html>
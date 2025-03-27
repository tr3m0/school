<?php
    if ($_POST["create"]) {
        if (isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["age"])) {
            function create($key) {
                setcookie($key, $_POST[$key], time() + 3600);
            }
            create("name");
            create("surname");
            create("age");
        }
    } elseif ($_POST["update"]) {
        function update($key) {
            setcookie($key, $_POST[$key] ?? $_COOKIE[$key], time() + 3600);
        }
        update("name");
        update("surname");
        update("age");
    } elseif ($_POST["delete"]) {
        setcookie("name");
        setcookie("surname");
        setcookie("age");
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
    <title>Cookie</title>
</head>
<body>
    <?php if (empty($_COOKIE)) { ?>
        <form action="index.php" method="POST">
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div>
                <label for="surname">Surname</label>
                <input type="text" name="surname" id="surname" required>
            </div>
            <div>
                <label for="age">Age</label>
                <input type="number" min="0" name="age" id="age" required>
            </div>
            <input type="submit" name="create">
        </form>
    <?php } else { ?>
        <table>
            <tr>
                <?php foreach ($_COOKIE as $key => $value) { ?>
                    <th><?= $key ?></th>
                <?php } ?>
            </tr>
            <tr>
                <?php foreach ($_COOKIE as $key => $value) { ?>
                    <th><?= $value ?></th>
                <?php } ?>
            </tr>
        </table>
        <form action="index.php" method="POST">
            <?php foreach ($_COOKIE as $key => $value) { ?>
                <div>
                    <label for="<?= $key ?>">Name</label>
                    <input type="text" name="<?= $key ?>" id="<?= $key ?>">
                </div>
            <?php } ?>
            <input type="submit" name="update" value="Update">
            <input type="submit" name="delete" value="Delete">
        </form>
    <?php } ?>
</body>
</html>
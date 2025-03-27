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
    <table>
        <tr>
            <?php foreach ($_SESSION as $key => $value) { ?>
                <th><?= $key ?></th>
            <?php } ?>
        </tr>
        <tr>
            <?php foreach ($_SESSION as $key => $value) { ?>
                <td><?= $value ?></td>
            <?php } ?>
        </tr>
    </table>
    <a href="salva.php">Back</a>
</body>
</html>
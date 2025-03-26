<?php
    $db = new mysqli("db-es-scuola", "root", "", "PHPQueryTemp");
    if ($db->connect_error) {
        echo $db->connect_error;
        $db->close();
        exit();
    }
    $result = $db->query("SELECT * FROM Students ORDER BY surname ASC");
    $db->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Students</title>
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Class</th>
        </tr>
        <?php foreach ($result as $student) { ?>
            <tr>
                <td><?= $student["id"] ?></td>
                <td><?= $student["name"] ?></td>
                <td><?= $student["surname"] ?? "null" ?></td>
                <td><?= $student["class"] ?></td>
            </tr>
        <?php } ?>
    </table>
</body>
</html>
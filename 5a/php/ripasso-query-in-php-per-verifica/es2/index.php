<?php
    $result = [];
    if ($_POST) {
        $db = new mysqli("db-es-scuola", "root", "", "PHPQueryTemp");
        if ($db->connect_error) {
            echo $db->connect_error;
            $db->close();
            exit();
        }
        $result = $db->query("SELECT * FROM Products WHERE category = '{$_POST["category"]}'");
        $db->close();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Products</title>
</head>
<body>
    <form action="index.php" method="POST">
        <label for="category">Show products in the category</label>
        <select name="category" id="category">
            <option value="ELEC">Electronics</option>
            <option value="FURN">Furniture</option>
            <option value="ACCS">Accessories</option>
            <option value="CLOT">Clothing</option>
        </select>
        <input type="submit">
    </form>
    <?php if ($_POST) { ?>
        <h1>Products for category <?= $_POST["category"] ?>:</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <?php foreach ($result as $product) { ?>
                <tr>
                    <td><?= $product["id"] ?></td>
                    <td><?= $product["name"] ?></td>
                    <td><?= $product["price"] ?></td>
                </tr>
            <?php } ?>
        </table>
    <?php } ?>
</body>
</html>
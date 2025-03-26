<?php
    session_start();
    const HOUR = 60 * 60;
    const PRODUCTS = [
        [
            "name" => "Product 1",
            "price" => 1
        ],
        [
            "name" => "Product 2",
            "price" => 2
        ],
        [
            "name" => "Product 3",
            "price" => 3
        ]
    ];
    $cart = $_SESSION["cart"] ?? [];
    if ($_POST) {
        if ($_POST["action"] === "add") {
            $cart[] = PRODUCTS[$_POST["id"]];
        } elseif ($_POST["action"] === "clear") {
            $cart = [];
        } else {
            echo "Error: invalid request";
            exit();
        }
    }
    $_SESSION["cart"] = $cart;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Shopping cart</title>
</head>
<body>
    <?php foreach (PRODUCTS as $id => $product) { ?>
        <form action="index.php" method="POST">
            <input type="text" name="action" value="add" hidden readonly required>
            <h1>Name: <?= $product["name"] ?></h1>
            <p>Price: <?= $product["price"] ?></p>
            <input type="text" name="id" value="<?= $id ?>" hidden readonly required>
            <input type="submit" value="Add to cart">
        </form>
    <?php } ?>
    <div>
        <h1>Cart</h1>
        <?php foreach ($cart as $product) { ?>
            <div>
                <h1>Name: <?= $product["name"] ?></h1>
                <p>Price: <?= $product["price"] ?></p>
            </div>
        <?php } ?>
        <form action="index.php" method="POST">
            <input type="text" name="action" value="clear" hidden readonly required>
            <input type="submit" value="Empty">
        </form>
    </div>
</body>
</html>
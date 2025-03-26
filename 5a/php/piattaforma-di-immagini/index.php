<?php
    require "lib/image.php";
    global $images;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php require "lib/html-meta.html" ?>
</head>
<body>
    <?php require "lib/header.html" ?>
    <main>
        <?php foreach ($images as $index => $image) { ?>
            <div>
                <h1><?= $image["title"] ?></h1>
                <a href="view.php?mode=index&index=<?= $index ?>">
                    <img src="<?= $image["miniature"] ?>">
                </a>
                <p><?= $image["description"] ?></p>
            </div>
        <?php } ?>
    </main>
</body>
</html>
<?php
    include("common.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Image platform</title>
</head>
<body>
    <header>
        <nav>
            <a href="index.php">Home</a>
            <a href="upload.php">Upload images</a>
            <?= searchBar() ?>
        </nav>
    </header>
    <main>
        <?php
            global $images;
            foreach ($images as $index => $image) {
                echo (
                    "<div>" .
                        "<h1>$image[title]</h1>" .
                        "<a href='look.php?mode=index&index=$index'>" .
                            "<img src='$image[miniature]'>" .
                        "</a>" .
                        "<p>$image[description]</p>" .
                    "</div>"
                );
            }
        ?>
    </main>
</body>
</html>
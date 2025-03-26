<?php
    require "lib/image.php";

    $index = null;
    switch ($_GET["mode"]) {
        case "index": {
            $index = $_GET["index"];
            break;
        }
        case "title": {
            $index = find_image($_GET["title"]);
            break;
        }
        default: {
            echo "<p>Error: invalid request</p>";
            exit();
        }
    }
    $image = get_image($index);

    function prev_image($index) {
        $prev_index = $index - 1;
        if ($prev_index < 0) {
            echo "<span>Prev</span>";
        } else {
            echo "<a href='?mode=index&index=$prev_index'>Prev</a>";
        }
    }
    function next_image($index) {
        $next_index = $index + 1;
        if ($next_index >= count_images()) {
            echo "<span>Next</span>";
        } else {
            echo "<a href='?mode=index&index=$next_index'>Next</a>";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php require "lib/html-meta.html" ?>
</head>
<body>
    <?php require "lib/header.html" ?>
    <main>
        <h1><?= $image["title"] ?? "" ?></h1>
        <img src="<?= $image["path"] ?? "" ?>">
        <p><?= $image["description"] ?? "" ?></p>
        <div>
            <?php
                prev_image($index);
                next_image($index);
            ?>
        </div>
    </main>
</body>
</html>
<?php
    require "lib/image.php";

    if ($_POST) {
        $path = "images/{$_POST["title"]}";
        $min_path = "images/min/{$_POST["title"]}";

        if (!is_dir("images")) {
            mkdir("images");
        }
        if (!is_dir("images/min")) {
            mkdir("images/min");
        }

        if (move_uploaded_file($_FILES["image"]["tmp_name"], $path) &&
            move_uploaded_file($_FILES["miniature"]["tmp_name"], $min_path)) {

            put_image([
                "title" => $_POST["title"],
                "description" => $_POST["description"],
                "path" => $path,
                "miniature" => $min_path
            ]);
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
        <form method="POST" enctype="multipart/form-data">
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" id="title" required>
            </div>
            <div>
                <label for="description">Description</label>
                <input type="text" name="description" id="description">
            </div>
            <div>
                <label for="image">Image</label>
                <input type="file" name="image" id="image" required accept="image/*">
            </div>
            <div>
                <label for="miniature">Miniature</label>
                <input type="file" name="miniature" id="miniature" required accept="image/*">
            </div>
            <input type="submit">
        </form>
    </main>
</body>
</html>
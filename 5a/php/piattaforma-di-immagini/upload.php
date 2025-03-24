<?php
    include("common.php");

    $title = @$_POST["title"];
    $description = @$_POST["description"];
    $image = @$_POST["image"];
    $miniature = @$_POST["miniature"];
    if (isset($title) && isset($description) && isset($image) && isset($miniature)) {
        $image_filename = "images/$title";
        $miniature_filename = "miniatures/$title";
        file_put_contents($image_filename, $image);
        file_put_contents($miniature_filename, $miniature);
        $images[] = [
            "title" => $title,
            "description" => $description,
            "path" => $image_filename,
            "miniature" => $miniature_filename
        ];
        file_put_contents("image-data.json", json_encode($images));
    }
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
        <form action="upload.php" method="POST">
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" id="title" required>
            </div>
            <div>
                <label for="description">Description</label>
                <input type="text" name="description" id="description">
            </div>
            <div>
                <label for="title">Image</label>
                <input type="file" name="image" id="image" accept="image/*" required>
            </div>
            <div>
                <label for="miniature">Miniature</label>
                <input type="file" name="miniature" id="miniature" accept="image/*" required>
            </div>
            <button type="submit">Upload</button>
        </form>
    </main>
</body>
</html>
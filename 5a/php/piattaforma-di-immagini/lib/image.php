<?php
const JSON_FILENAME = "images.json";
$images = json_decode(file_get_contents(JSON_FILENAME), true) ?? [];

function find_image($title) {
    global $images;
    foreach ($images as $index => $image) {
        if ($image['title'] === $title) {
            return $index;
        }
    }
    return null;
};
function put_image($image) {
    global $images;
    if (isset($images[$image["title"]])) { // image already exists
        return;
    }
    $images[] = $image;
    file_put_contents(JSON_FILENAME, json_encode($images));
};
function get_image($index) {
    global $images;
    return $images[$index];
};

function count_images() {
    global $images;
    return count($images);
}
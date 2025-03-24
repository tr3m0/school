<?php
$images = json_decode(file_get_contents("image-data.json"), true);

function searchBar() {
    return (
        "<form action='look.php' method='GET'>" .
            "<input type='text' name='mode' value='title' required hidden>" .
            "<input type='search' name='title' required>" .
            "<button type='submit'>Search</button>" .
        "</form>"
    );
}
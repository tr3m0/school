<?php

function connect() {
    $db_connect_data = json_decode(file_get_contents('conf.json'), true);
    return new mysqli(
        $db_connect_data["hostname"],
        $db_connect_data["username"],
        $db_connect_data["password"],
        $db_connect_data["database_name"]
    );
}
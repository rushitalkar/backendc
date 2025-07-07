<?php

$cars = array("brand" => "Ford", "model" => "Mustang");
$cars += ["color" => "red", "year" => 1964];
foreach ($cars as $key) {
    echo "  ".$key;

}

?>
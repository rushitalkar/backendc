<?php

$cars = array("Vaidehi", "Durva", "Athu");
foreach ($cars as &$x) {
  $x = "Rushii";
}

$x = "Rohit";

var_dump($cars);


?>
<?php

$cars = array("Vaidehi", "Durva", "Athu");
foreach ($cars as &$x) {
  $x = "Rushii";
}
unset($x);
var_dump($cars);


?>
<?php

$age = array("Vaidehi"=>20, "Rohan"=>14, "Rohit"=>45, "Tejas"=>35);
 
foreach ($age as $key => $value) {
krsort($age);
print_r($age);
}
?>
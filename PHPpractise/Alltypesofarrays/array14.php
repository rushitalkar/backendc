<?php

$random = array("Rohit", 12 , 15 , true ,false ,"Rushii");

print_r($random);
echo $random[2];
echo"  Written in Loops  \n";
foreach ($random as $key) {
    echo $key." ";
}

?>
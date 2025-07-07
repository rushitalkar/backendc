<?php 


$arr = array(12,13,16,24,26,37,21,46,78);
echo"This is an Even NO ";
foreach ($arr as $item) {
    if ($item%2 == 0) {
        echo "\n".$item;
    }
}
 
?>

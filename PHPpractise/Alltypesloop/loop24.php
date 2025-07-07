<?php 

define("associative",[
    "key1" => 12,
    "key2" => 19,
    "key3" => 14,
]
);

foreach(associative as $k => $t){
    echo " ".$t+$t;
    $a = array_slice($t,0,1);
}

?>
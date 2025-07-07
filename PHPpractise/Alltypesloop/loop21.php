<?php 

define("associative",[
    "key1" => 12,
    "key2" => 13,
    "key3" => 14,
]
);

foreach(associative as $k => $t){
    echo "".$k."=".$t." \n";
}

?>
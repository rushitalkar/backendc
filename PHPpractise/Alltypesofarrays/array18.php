
<?php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
    100   => -100,
    -100  => 100,
);
var_dump($array);

foreach ($array as $key => $value) {
    var_dump($value);
}
?>
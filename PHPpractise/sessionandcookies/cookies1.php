<?php
    $cookie_name = "user";
    $cookie_value = "JohnDoe";
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // Expires in 30 days

    echo "Cookie has been set.";
?>
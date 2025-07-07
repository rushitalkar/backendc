<?php
    if (isset($_COOKIE["user"])) {
        echo "User: " . $_COOKIE["user"];
    } else {
        echo "User cookie is not set.";
    }
?>
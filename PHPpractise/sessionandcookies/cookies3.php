php

<?php
    setcookie("user", "", time() - 3600, "/"); 

    echo "Cookie 'user' has been deleted.";
?>
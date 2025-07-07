<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <center>
        <?php
           $user = $_GET["username"];
           $pass = $_GET["password"];


           if ($user == $pass) {
               echo "No you cannot entererd same password and username";
           }else if(empty( $user ) || empty( $pass )) {
                 echo "Username and Password should not be empty";
           }else{
             echo "You are correct";
           }

   ?> </center>
</body>
</html>
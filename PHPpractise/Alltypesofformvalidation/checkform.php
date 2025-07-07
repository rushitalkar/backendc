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

           if(empty($user) || empty($pass)){
               echo "You need to fill something";

           }else if(strcmp($user , "Rushii")== 0 ||strcasecmp($pass , "1234")){
                echo "You  are Right";


           }else{
              echo "You are Wrong";
           }



        ?>
    </center>
</body>
</html>
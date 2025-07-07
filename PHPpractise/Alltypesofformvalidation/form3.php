<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <center>
    <form action="form3.php" method="POST">
        <table>
            <tr>
                <td>Username</td>
                <td><input type="text" name="username" id="username"></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" name="password" id="password"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Submit">
            <input type="submit" value="Submit" name="submitbt">
            </td>
            </tr>
        </table>
    </form>

  <?php 
  
  
  if(isset($_POST["submitbt"])) {
        $user = $_POST['username'];
        $pass = $_POST['password'];
        if ($user == null && $pass == null) {
            echo "Please enter a username and Password";
        }else{
            echo "You can done now";
        }
    
    }
  
  
  ?>
   </center>


</body>
</html>
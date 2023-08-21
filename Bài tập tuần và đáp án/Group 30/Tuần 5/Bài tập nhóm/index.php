<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <?php
            $valid = false;
            $nameErr = $emailErr = "";
            $name = $email = $comment = "";

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (strlen(trim($_POST["name"])) == 0) {
                    $nameErr = "Tên không được để trống";
                }
                else {
                    $name = test_input($_POST["name"]);
                    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
                        $nameErr = "Tên chỉ được có ký tự và dấu cách";
                    }
                }

                if (strlen(trim($_POST["email"])) == 0) {
                    $emailErr = "Email không được để trống";
                }
                else {
                    $email = test_input($_POST["email"]);
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $emailErr = "Email chưa hợp lệ";
                    }
                }
                
                if (strlen(trim($_POST["comment"])) == 0) {
                    $comment = "";
                }
                $comment = test_input($_POST["comment"]);

                if ($nameErr == "" && $emailErr == "") {
                    $valid = true;
                }
            }

            function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
        ?>
        <p><span class="error">* required field</span></p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
            Tên:
            <input type="text" name="name" id="name" value="<?php echo $name;?>" />
            <span class="error">* <?php echo $nameErr ?></span>
            <br><br>

            Email:
            <input type="mail" name="email" id="email" value="<?php echo $email;?>" />
            <span class="error">* <?php echo $emailErr ?></span>
            <br><br>

            Bình luận:
            <br>
            <textarea name="comment" id="comment" cols="30" rows="10"><?php echo $comment;?></textarea>
            <br><br>
            <input type="submit" value="Send" id="button" />
        </form>
        <br><br>
        <?php 
            if ($valid) {
                echo $name." (".$email.") bình luận:";
                echo "<br>";
                echo $comment;
            }
        ?>
    </body>
</html>
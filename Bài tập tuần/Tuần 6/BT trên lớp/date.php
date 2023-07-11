<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tính tuổi và số ngày chênh lệch giữa hai người</title>
  </head>
  <body>
    <h2>Nhập thông tin họ tên và ngày sinh của hai người</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      Họ và tên người thứ nhất: <input type="text" name="name1" /><br /><br />
      Ngày sinh người thứ nhất: <input type="date" name="dob1" /><br /><br />
      Họ và tên người thứ hai: <input type="text" name="name2" /><br /><br />
      Ngày sinh người thứ hai: <input type="date" name="dob2" /><br /><br />
      <input type="submit" name="submit" value="Tính" />
    </form>

    <?php
    $result = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name1 = $_POST["name1"];
        $dob1 = $_POST["dob1"];
        $name2 = $_POST["name2"];
        $dob2 = $_POST["dob2"];

        $today = date("d-m-y");
        $diff1 = date_diff(date_create($dob1), date_create($today));
        $diff2 = date_diff(date_create($dob2), date_create($today));
      
        $result = "<h2>Kết quả:</h2>";
        $result = $result . "Tuổi của " . $name1 . " là " . $diff1->format('%y') . " tuổi.<br>";
        $result = $result.  "Tuổi của " . $name2 . " là " . $diff2->format('%y') . " tuổi.<br>";


        $diff_days = floor(abs(strtotime($dob1) - strtotime($dob2)) / (60 * 60 * 24));
        $result = $result. "Số ngày chênh lệch giữa hai người là " . $diff_days . " ngày.";

        echo $result;
    }
    ?>
  </body>
</html>

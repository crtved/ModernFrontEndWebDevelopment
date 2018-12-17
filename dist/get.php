<?php

$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=modernwebdevdb", $username, $password);
  $sql = $conn->query("CALL get")->fetchAll();
  $arr = [];
  foreach ($sql as $key => $row) {
    array_push($arr, [
      'id' => $row['id'],
      'name' => $row['fname'],
    ]);
  }

  print json_encode($arr);
} catch (PDOException $error) {
  echo "Connection failed: " . $error->getMessage();
}


<?php
session_start();
$v = $_POST['name'];

$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=modernwebdevdb", $username, $password);
  $sql = 'CALL fullname("' . $v . '")';
  $conn->exec($sql);
} catch (PDOException $error) {
  echo "Connection failed: " . $error->getMessage();
}


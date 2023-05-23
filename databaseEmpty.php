<?php
$servername = "localhost";
$username = "php";
$password = "CSE135pw!";
$dbname = "data";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$json = file_get_contents('db.json');
  
// Decode the JSON file
$json_data = json_decode($json, true);

$sql = "TRUNCATE TABLE staticData";

if (mysqli_query($conn, $sql)) {
  echo "Removed successfully\n";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$sql = "TRUNCATE TABLE performanceData";

if (mysqli_query($conn, $sql)) {
  echo "Removed successfully\n";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$conn->close();
?>

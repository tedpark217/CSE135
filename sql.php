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

//get sessions IDs
$path    = '/var/www/csesd.site/public_html/data/HW3/session';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));

//print_r($files);

$sessionIDS = array();
for($x = 2; $x < sizeof($files) + 2; $x++){
    $filename = $files[$x];
    $myArray = explode('.', $filename);
    $sessionIDS[] = $myArray[0];
}

$static = array("language","acceptCookies","javascriptEnabled","screenSize","windowSize","connection","allowsCSS");
$perform = array("timing", "startLoading", "endLoading");
$performTiming = array("duration", "nextHopProtocol", "renderBlockingStatus");

for ($index = 0; $index < sizeOf($files); $index++) {
    $fileIndex = $index + 2;
    $staticpath    = '/var/www/csesd.site/public_html/data/HW3/static/'.$files[$fileIndex];
    $staticjson = file_get_contents($staticpath);
    $staticjson_data = json_decode($staticjson, true);

    $userAgent = $staticjson_data["userAgent"];
    $language = $staticjson_data["language"];
    $acceptCookies = $staticjson_data["acceptCookies"];
    $javascriptEnabled = $staticjson_data["javascriptEnabled"];
    $ww = $staticjson_data["windowSize"]["width"];
    $wh = $staticjson_data["windowSize"]["height"];
    $sw = $staticjson_data["screenSize"]["width"];
    $sh = $staticjson_data["screenSize"]["height"];
    $connection = $staticjson_data["connection"];
    $allowsCSS = 0;

    $performpath    = '/var/www/csesd.site/public_html/data/HW3/performance/'.$files[$fileIndex];
    $performjson = file_get_contents($performpath);
    $performjson_data = json_decode($performjson, true);

    //print_r($performjson_data);
    $startLoading = $performjson_data["startLoading"];
    $endLoading = $performjson_data["endLoading"];
    $totalLoadTime = $performjson_data["totalLoadTime"];

    $check = "SELECT EXISTS(SELECT * FROM staticData WHERE UID='$sessionIDS[$index]')";

    $obj = mysqli_query($conn, $check);
    $row = mysqli_fetch_array($obj,MYSQLI_NUM);
    
    if($row[0] == 1){
        $sql = "DELETE FROM staticData WHERE UID='$sessionIDS[$index]'";
        mysqli_query($conn, $sql);

        $sql = "DELETE FROM performanceData WHERE UID='$sessionIDS[$index]'";
        mysqli_query($conn, $sql);
    }

    $sql = "INSERT INTO staticData (UID, userAgent, language, acceptCookies, javascriptEnabled, screenWidth, screenHeight, windowWidth, windowHeight, connection, allowCSS) 
        VALUES ('$sessionIDS[$index]', '$userAgent', '$language', $acceptCookies, $javascriptEnabled, $ww, $wh, $sw, $sh, '$connection', $allowsCSS)";
    if (mysqli_query($conn, $sql)) {
        echo "New static record created successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }  

    $sql = "INSERT INTO performanceData (UID, startLoading, endLoading, totalLoadTime)
        VALUES ('$sessionIDS[$index]', $startLoading, $endLoading, $totalLoadTime)";

    if (mysqli_query($conn, $sql)) {
        echo "New performance record created successfully\n";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }  
} 

$conn->close();
?>

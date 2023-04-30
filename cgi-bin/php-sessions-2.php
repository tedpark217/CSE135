<?php
session_id($_COOKIE['CGISESSID']);
session_start();
?>

<html>
<head> 
<title>PHP Sessions</title>
</head> 

<body> 
<h1>PHP Sessions Page</h1>

<?php
$name = $_SESSION['name'];
if($name == null){
    echo "<p><b>Cookie: </b> No Cookie Set";
}
else{
    echo "<p><b>Cookie: </b>";
    echo $name;
}
?>

<br/><br/>
<a href="/cgi-bin/php-sessions-1.php">Session Page 1</a><br/>
<a href="/php-cgiform.html">PHP CGI Form</a><br />
<form style="margin-top:30px" action="/cgi-bin/php-destroy-session.php" method="get">
<button type="submit">Destroy Session</button>
</form>

</body>
</html>
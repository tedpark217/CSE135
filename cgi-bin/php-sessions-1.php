<?php
session_start();
?>

<html>
<head> 
<title>PHP Sessions</title>
</head> 

<body> 
<h1>PHP Sessions Page</h1>

<?php
$cookie_name = 'CGISESSID';

$name = null;
if($_SESSION['name'] && $_POST['username']){
    $name = $_POST['username'];
}
elseif($_SESSION['name']){
    $name = $_SESSION['name'];
}
elseif($_POST['username']){
    $name = $_POST['username'];
}
$_SESSION['name'] = $name;

setcookie($cookie_name, session_id(), time() + (86400 * 30), "/");

if($name == null){
    echo "<p><b>Cookie: </b> No Cookie Set";
}
else{
    echo "<p><b>Cookie: </b>";
    echo $name;
}
?>

<br/><br/>
<a href="/cgi-bin/php-sessions-2.php">Session Page 2</a><br/>
<a href="/php-cgiform.html">PHP CGI Form</a><br />
<form style="margin-top:30px" action="/cgi-bin/php-destroy-session.php" method="get">
<button type="submit">Destroy Session</button>
</form>

</body>
</html>
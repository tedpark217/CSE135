<?php
session_name('name');
session_start();
unset($_SESSION['name']);
session_destroy();
?>

<html>
<head> 
<title>PHP Session Destroyed</title>
</head> 

<body> 
<h1>Session Destroyed</h1>

<a href="/php-cgiform.html">Back to the Perl CGI Form</a><br />
<a href="/cgi-bin/php-sessions.php">Back to Session Page</a><br />
</body>
</html>

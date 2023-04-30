<html>
<head>
<title>TEAM NoNamed - Hello, PHP!</title>
</head>

<body>
<h1 align="center">TEAM NoNamed - Hello HTML World</h1><hr/>

<?php
echo "<p>Hello, World</p>";
echo "<p>This page was generated with the PHP programming langauge</p>";
echo "<p>Current Time: " . date("l M d H:i:s Y") . "</p>";
echo "<p>Your current IP address is: " . getenv('REMOTE_ADDR') . "</p>";
?>

</body>
</html>
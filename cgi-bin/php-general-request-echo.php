<html>
<head>
<title>General Request Echo</title>
</head>

<body>
<h1 align="center">General Request Echo</h1><hr/>

<?php
echo "<p><b>HTTP Protocol: </b>" . $_SERVER["SERVER_PROTOCOL"] . "</p>";
echo "<p><b>HTTP Method: </b>" . $_SERVER["REQUEST_METHOD"] . "</p>";
echo "<p><b>Query String: </b>" . $_SERVER["QUERY_STRING"] . "</p>";

$string = http_build_query($_POST);

echo "<p><b>Message Body: </b>" . $string . "</p>";
?>

</body>
</html>
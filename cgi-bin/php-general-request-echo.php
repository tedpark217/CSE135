<?php
echo "<html>";
echo "<head>";

echo "<title>General Request Echo</title>";

echo "</head>"; 

echo "<body>";
echo "<h1 align=center>General Request Echo</h1><hr/>\n";

echo "<p><b>HTTP Protocol: </b>" . $_SERVER["SERVER_PROTOCOL"] . "</p>";
echo "<p><b>HTTP Method: </b>" . $_SERVER["REQUEST_METHOD"] . "</p>";
echo "<p><b>Query String: </b>" . $_SERVER["QUERY_STRING"] . "</p>";

$string = http_build_query($_POST);

echo "<p><b>Message Body: </b>" . $string . "</p>";

echo "</body>";
echo "</html>";
?>
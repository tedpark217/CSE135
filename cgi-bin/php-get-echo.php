<?php
echo "<html>";
echo "<head>";

echo "<title>GET Request Echo</title>";

echo "</head>"; 

echo "<body>";
echo "<h1 align=center>Get Request Echo</h1><hr/>\n";

echo "<b>Query String: </b>" . $_SERVER["QUERY_STRING"] . "<br />\n";

parse_str($_SERVER["QUERY_STRING"], $output);

while (list($var,$value) = each ($output)) {
    echo "" . $var . " = " . $value . "<br />\n";
}

echo "</body>";
echo "</html>";
?>
<?php
echo "<html>";
echo "<head>";

echo "<title>POST Request Echo</title>";

echo "</head>"; 

echo "<body>";
echo "<h1 align=center>POST Request Echo</h1><hr/>\n";

echo "<b>Message Body: </b> <br />\n";
echo "<ul>\n";

while (list($var,$value) = each ($_POST)) {
    echo "<li>" . $var . " = " . $value . "</li>\n";
}

echo "</body>";
echo "</html>";
?>
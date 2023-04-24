<?php
echo "<html>";
echo "<head>";

echo "<title>Environment Variables</title>";

echo "</head>"; 

echo "<body>";
echo "<h1 align=center>Environment Variables</h1><hr/>\n";

ksort($_SERVER);

while (list($var,$value) = each ($_SERVER)) {
    echo "<b>" . $var . ": </b>" . $value . "<br />\n";
}

echo "</body>";
echo "</html>";
?>
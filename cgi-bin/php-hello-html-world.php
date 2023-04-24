<?php
echo "<html>";
echo "<head>";

echo "<title>TEAM TDH - Hello, PHP!</title>";

echo "</head>";

echo "<body>";
echo "<h1 align=center>TEAM TDH - Hello HTML World</h1><hr/>\n";

echo "<p>Hello, World</p>";
echo "<p>This page was generated with the PHP programming langauge</p>";
echo "<p>Current Time: " . date("l M d H:i:s Y") . "</p>";
echo "<p>Your current IP address is: " . getenv('REMOTE_ADDR') . "</p>";

echo "</body>";
echo "</html>";
?>
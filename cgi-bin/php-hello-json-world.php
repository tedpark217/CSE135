<?php
echo "<html>";
echo "<head>";

echo "<title>TEAM TDH - Hello, PHP!</title>";

echo "</head>";

echo "<body>";

$arr = array('title' => "TEAM TDH - Hello, PHP!", 'heading' => "TEAM TDH - Hello, PHP!", 'message' => "This page was generated with the PHP programming language", 'time' => date("l M d H:i:s Y"), 'IP' => getenv('REMOTE_ADDR'));

echo "<p>" . json_encode($arr) . "</p>";

echo "</body>";
echo "</html>";
?>
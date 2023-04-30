<meta http-equiv="Content-Type" content="application/json";>

<?php
$arr = array('title' => "TEAM NoNamed - Hello, PHP!", 'heading' => "TEAM NoNamed - Hello, PHP!", 'message' => "This page was generated with the PHP programming language", 'time' => date("l M d H:i:s Y"), 'IP' => getenv('REMOTE_ADDR'));

echo "<p>" . json_encode($arr) . "</p>";
?>

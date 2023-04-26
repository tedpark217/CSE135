<meta http-equiv="Content-Type" content="application/json";>

<?php
$arr = array('title' => "TEAM TDH - Hello, PHP!", 'heading' => "TEAM TDH - Hello, PHP!", 'message' => "This page was generated with the PHP programming language", 'time' => date("l M d H:i:s Y"), 'IP' => getenv('REMOTE_ADDR'));

echo "<p>" . json_encode($arr) . "</p>";
?>

<html>
<head>
<title>Environment Variables</title>
</head>

<body>
<h1 align="center">Environment Variables</h1><hr/>

<?php
ksort($_SERVER);

while (list($var,$value) = each ($_SERVER)) {
    echo "<b>" . $var . ": </b>" . $value . "<br />\n";
}
?>

</body>
</html>
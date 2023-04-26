<html>
<head>
<title>POST Request Echo</title>
</head>

<body>
<h1 align="center">POST Request Echo</h1><hr/>
<b>Message Body: </b> <br />

<?php
echo "<ul>\n";

while (list($var,$value) = each ($_POST)) {
    echo "<li>" . $var . " = " . $value . "</li>\n";
}

echo "</ul>\n";
?>

</body>
</html>
<html>
<head>
<title>GET Request Echo</title>
</head>

<body>
<h1 align="center">Get Request Echo</h1><hr/>

<?php
echo "<b>Query String: </b>" . $_SERVER["QUERY_STRING"] . "<br />\n";

parse_str($_SERVER["QUERY_STRING"], $output);

while (list($var,$value) = each ($output)) {
    echo "" . $var . " = " . $value . "<br />\n";
}
?>

</body>
</html>
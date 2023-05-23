<!DOCTYPE html>
<html>

<head>
    <script src="https://cdn.zinggrid.com/zinggrid.min.js" defer></script>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
    <title>Database</title>
</head>

<body>
    <h1 align="center">Database Info</h1>

<script>
    <?php
        $servername = "localhost";
        $username = "php";
        $password = "CSE135pw!";
        $dbname = "data";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }

    $staticData = [];
    if ($result = $conn->query("SELECT * FROM staticData")) {
      $staticData = $result->fetch_all(MYSQLI_ASSOC);
      $result->close();
    }

    $performanceData = [];
    if ($result = $conn->query("SELECT * FROM performanceData")) {
      $performanceData = $result->fetch_all(MYSQLI_ASSOC);
      $result->close();
    }
  ?>
</script>

<script>
    var staticDataValues = <?php echo json_encode($staticData) ?>;
    var performDataValues = <?php echo json_encode($performanceData) ?>;
    <?php
      $conn->close();
    ?>
</script>

<script>
  window.onload = function() {
    document.querySelector('zing-grid').data = staticDataValues;
  }
</script>
<zing-grid></zing-grid>

</body>
</html>


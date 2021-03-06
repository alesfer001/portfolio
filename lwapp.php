<!DOCTYPE html>
<?
if($_SERVER["HTTPS"] != "on"){
    header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
    exit();
}
 header("Access-Control-Allow-Origin: *");
?>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/weather-icons-codepen.min.css">
    <link rel="stylesheet" href="css/lwapp.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8"/>

    <title>Local Weather App</title>
</head>

<body>
  <h1>Local Weather</h1>

  <div class="weather">

  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="js/lwapp.js"></script>
</body>

</html>

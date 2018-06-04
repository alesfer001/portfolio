<?php

$to = 'lesferayoub@gmail.com';
$subject = 'Portfolio contact message';

$name = "";
$email = "";
$message = "";
$body = "";

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $body = $name . " (" . $email . "): \n" . $message;
}

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: A/L Portfolio <DONOTREPLY@lesfer.com>' . "\r\n";

if($_POST){
  mail($to, $subject, $body, $headers);
}

?>

<!DOCTYPE html>

<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ayoub Lesfer</title>
</head>

<body>

  <div class="header">
    <ul class="navi-bar">
      <li><a class="logolink" href="index.html#home"><img id="logo" src="img/logo.png" alt="Minified Logo"></a></li>
      <li><a class="navlink" id="aboutme-link" href="index.html#about-me">About Me</a></li>
      <li><a class="navlink" id="work-link" href="index.html#work">Work</a></li>
      <li><a class="navlink" id="contact-link" href="index.html#contact">Contact</a></li>
    </ul>
  </div>

  <div id="home" class="parallax img1">
      <blockquote>
          Thank you for contacting me. I will reach out to you as soon as possible!
          <cite>A/L Services</cite>
      </blockquote>
  </div>

  <div id="contact">
    <div id="reach">
        <p>Reach me on</p>
        <a href="https://www.facebook.com/ayoub.lesfer" target=_blank><i class="fa fa-facebook reach-icons"></i></a>
        <a href="https://twitter.com/Lesfer_Ayoub" target=_blank><i class="fa fa-twitter reach-icons"></i></a>
        <a href="https://github.com/alesfer001" target=_blank><i class="fa fa-github reach-icons"></i></a>
        <a href="https://www.linkedin.com/in/ayoub-lesfer-217bbb119/" target=_blank><i class="fa fa-linkedin reach-icons"></i></a>
        <a href="https://codepen.io/RickNotMorty/" target=_blank><i class="fa fa-codepen reach-icons"></i></a>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="js/index.js"></script>
  <script>
  $("#home").append("<p class='redirect'></p>");
  var timer=5;
  setInterval(function(){
    $(".redirect").html("You will be redirected in " + timer-- + " seconds.");
  }, 1000)
  setTimeout(function(){
    window.location.replace("index.html");
  },5000);
  </script>
</body>

</html>

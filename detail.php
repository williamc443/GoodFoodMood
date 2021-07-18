<!DOCTYPE html>
<html lang="en">
  <head>
    <title>GFM Home</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.typekit.net/iqd3atl.css">
    
    <link rel="stylesheet" href="css/detail.css" />
    <link rel="stylesheet" href="css/header.css" />

    <link rel="stylesheet" href="library/font-awesome/css/all.css">
    <link rel="stylesheet" href="library/font-awesome/css/brands.css">
    <link rel="stylesheet" href="library/font-awesome/css/fontawesome.css">
    <link rel="stylesheet" href="library/font-awesome/css/regular.css">
    <link rel="stylesheet" href="library/font-awesome/css/solid.css">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <script src="js/navbar.js"></script>
</head>
<body>
      <header class="header">
          <div id="logo-container">
              <img src="images/logo3.png" id="logo" alt="greenfork&spoon">
          </div>
          <div class="GFM">
          <a class="header-logo"  href="index.html"><h2 id="indexH1">Good Food Mood</h2></a>
              <div class="nav-container">
                  <nav id="nav" class="nav">
                      <li><a href="index.html" class="active">Home</a></li>
                      <li><a href="recipe.html">Recipies</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      
                  </nav>
              </div>
              <div class="search">
                  <i class="fas fa-search"></i>
                  <input type="text" class="form-control" placeholder="Search..">
              </div>
              <div class="nav-dropdown ml-3">
                  <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-bars"></i>
                  </a>
                
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="index.html">Home</a>
                    <a class="dropdown-item" href="recipe.html">Recipies</a>
                    <a class="dropdown-item" href="contact.html">Contact</a>
                  </div>
                </div>
          </div>
      </header>

        <main>
          <div id="recipe_detail"></div>
          <div class="row">
            <div class="col-sm-3 mb-4">
              <img id="recipe_img" src="" width="100%" alt="">
            </div>
            <div class="col-sm-5 detail-middle mb-4">
            <h2 id="recipe_name" class="mt-3"></h2>
              <div id="recipe_info">
              </div>
            </div>
            <div class="col-sm-4 detail-ingrediant">
              <h2>Ingrediants</h2>
              <div id="ingrediant">
              </div>
            </div>
          </div>
        </main>
        <div class="footer">
          <div class="footer-inner">
            <img class="footer-img" src="images/logo3.png" id="logo" alt="greenfork&spoon">
            <p class="mt-5">Copyrights GFM</p>
            <p>Salad st. 101 Norway</p>
            <div>
              <i class="fab fa-facebook-f mx-1"></i>
              <i class="fab fa-twitter mx-1"></i>
              <i class="fas fa-camera mx-1"></i>
              <i class="fas fa-envelope mx-1"></i>
              <i class="fas fa-phone mx-1"></i>
            </div>
          </div>
        </div>
        <input type="hidden" id = "recipe_id" value = "<?php echo $_GET["id"]; ?>">
        <script src="js\detail.js"></script>
        <!-- <script src="js\script.js"></script> -->
        <div id="overlay">
        <div class="cv-spinner">
          <span class="spinner"></span>
        </div>
      </div>
</body>

</html>
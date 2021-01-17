<!DOCTYPE html>
<html lang="pl">

  <head>
    <meta charset="UTF-8">
    <title>Książka adresowa</title>
    <!-- React -->
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone/babel.js"></script>
    <!-- Bootstrap + JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- Custom -->
    <script type="text/babel" src="address-book.js"></script>
    <link rel="stylesheet" href="custom.css"/>
  </head>

  <body>

    <div id="address-book"></div>

    <!-- FRONT -->
    
    <div class="container navigation">
      <div class="row">
        <div class="col-md-6">
          <div class="title">
            Książka adresowa
          </div>
        </div>
        <div class="col-md-6">
          <div class="single">
            <div class="options">
              <div class="single">
                Lista
              </div>
              <div class="single">
                Dodaj
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container contacts">
      <div class="row">
        <?php for ($i = 0; $i < 10; $i++) : ?>
          <div class="col-md-3">
            <div class="single">
              <div class="avatar" style="background-image: url('img/avatar.webp')">

              </div>
              <div class="title">
                Monika pietrzałek
              </div>
              <div class="tel">
                612 612 612
              </div>
              <div class="email">
                mpietrzalek@example.com
              </div>
            </div>
          </div>
        <?php endfor; ?>
      </div>
    </div>

  </body>
  
</html>
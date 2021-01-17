<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8">
  <title>Pierwszy komponent w React.js</title>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone/babel.js"></script>
</head>

<body>
  <header class="ui fixed menu">
  <nav class="ui container">
    <a href="#" class="header item">
      <img class="logo" src="https://www.freeiconspng.com/uploads/small-person-icons--free-download-14.jpg" />
      Lista kontaktów
    </a>
    <div class="header item">
      <button class="ui button">Dodaj</button>
    </div>
  </nav>
</header>
  
<main class="ui main text container">
  <ul class="ui relaxed divided list selection">
    <li class="item">
      <img src="https://icons.iconarchive.com/icons/aroche/delta/128/File-JPG-icon.png" class="ui mini rounded image" />
      <div class="content">
        <h4 class="header">Lena</h4>
        <div class="description">JavaScript Developer</div>
      </div>
    </li>
    <li class="item">
      <img src="https://icons.iconarchive.com/icons/aroche/delta/128/File-JPG-icon.png" class="ui mini rounded image" />
      <div class="content">
        <h4 class="header">Brian</h4>
        <div class="description">Human Resources</div>
      </div>
    </li>
    <li class="item">
      <img src="https://icons.iconarchive.com/icons/aroche/delta/128/File-JPG-icon.png" class="ui mini rounded image" />
      <div class="content">
        <h4 class="header">Rick</h4>
        <div class="description">QA</div>
      </div>
    </li>
  </ul>
</main>
  
  
  <div id="app"></div>
  <script type="text/babel">
    function MojKomponent({ title = "tytuł", content }) {
      return (
        <div>
          <dialog open>
            <h1>{title}</h1>
            <p>{content}</p>
          </dialog>
        </div>
      );
    }
    
    ReactDOM.render(
      <MojKomponent title="Tytuł 2" content="Treść 1" />,
      document.getElementById('app')
    );
  </script>
</body>

</html>
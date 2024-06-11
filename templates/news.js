const first_part = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style/style.css" />
  </head>
  <body>
    <div class="wrapper">
      <header>
        <div class="logo-container">
          <img class="logo" src="./style/img/logo.png" />
        </div>
        <div class="butt_auth-container">
          <button class="butt_auth mb" onclick="back()">Назад</button>
        </div>
      </header>
      <nav id="nav_vertical">
        <button class="salir" onclick="button_on_click()">
          <img class="left_img_nav" src="./style/img/left.png" />
        </button>
        <div class="nav_content">
          <a class="nav_link" href="login.html">Увійти</a>
        </div>
        <div id="id_nav_vertical"></div>
      </nav>
      <nav id="nav_horizontal">
        <div id="id_nav_horizontal"></div>
      </nav>
      <button id="buttonmenu" onclick="button_on_click()">
        <img class="imgmenu" src="./style/img/line.png" />
      </button>
      <main>
        <div class="news-container" id="users">`
const second_part = ` </div>
</main>
</div>
<footer id="id_footer"></footer>
</body>
<script src="./style/js/parts/footer.js"></script>
<script src="./style/js/parts/color.js"></script>
<script src="./style/js/parts/nav.js"></script>
<script src="./style/js/index.js"></script>
</html>`
module.exports = { first_part, second_part }

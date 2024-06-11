const first_part = `<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style/style.css" />
      </head>

  <body>
    <script>
      var token = localStorage.getItem("token") // Отримайте токен зі змінної EJS
      fetch("/check", {
        method: "POST",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify({ token: token }),
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          if (data.message !== "checked") {
            window.location.href = "index.html"
          } 
        })
        .catch((error) => {
          console.error("Error:", error)
        })

      function logout() {
        localStorage.removeItem("token")
        window.location.href = "index.html"
      }
    </script>
    <script src="/js/index.js"></script>
    <header>
      <div class="logo-container">
        <img class="logo" src="./style/img/logo.png" />
      </div>
      <div class="butt_auth-container">
        <button class="butt_auth mb" onclick="logout()">
          Вийти
        </button>
      </div>
    </header>
    <main>
      <nav class="mb"></nav>
      <nav id="nav_vertical">
        <button class="salir" onclick="button_on_click()">
          <img class="left_img_nav" src="./style/img/left.png" />
        </button>
        <div class="nav_contents">
          <!-- <div class="nav_content"><a class="nav_link" href="/login">dbq</a></div> -->
          <div class="nav_content">
            <a class="nav_link" href="/login">Учасники</a>
          </div>
          <div class="nav_content">
            <a class="nav_link" href="/login">Засідання</a>
          </div>
        </div>
      </nav>
      <nav id="nav_horizontal">
        <div class="nav_contents">
          <div class="nav_content">
            <a class="nav_link" href="/members">Учасники</a>
          </div>
          <div class="nav_content">
            <a class="nav_link" href="/meets">Засідання</a>
          </div>
        </div>
      </nav>
      <button id="buttonmenu" onclick="button_on_click()">
        <img class="imgmenu" src="./style/img/line.png" />
      </button>
      <div class="news-conatiner">`
const second_part = `    </div>
</main>
</body>
</html>
`

module.exports ={first_part, second_part}
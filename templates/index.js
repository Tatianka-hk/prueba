const first_part = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style/style.css" />
      </head>
    <body> 
        <header>
            <div class="logo-container">
                <img class="logo" src="./style/img/logo.png">
            </div>
            <div class="butt_auth-container">
                <button class="butt_auth mb" onclick="window.location.href = 'login.html'">Увійти</button>
            </div>
            
        </header> 
    <main>
        <nav class="mb"></nav>
        <nav id="nav_vertical">
            <button class="salir" onclick="button_on_click()"><img class="left_img_nav" src="./style/img/left.png"/></button>
            <div class="nav_contents">
                <div class="nav_content"><a class="nav_link" href="login.html">Увійти</a></div>
                <div class="nav_content"><a class="nav_link" href="/members">Учасники</a></div>
                <div class="nav_content"><a class="nav_link" href="/login">Засідання</a></div>
                <div class="nav_content"><a class="nav_link" href="/register">Зареєструватися</a></div>
            </div>
        </nav>
        <nav id="nav_horizontal">
            <div class="nav_contents">
                <div class="nav_content"><a class="nav_link" href="login.html">Учасники</a></div>
                <div class="nav_content"><a class="nav_link" href="/members">Учасники</a></div>
                <div class="nav_content"><a class="nav_link" href="/login">Засідання</a></div>
                <div class="nav_content"><a class="nav_link" href="/register">Зареєструватися</a></div>
            </div>
        </nav>
        <button id="buttonmenu" onclick="button_on_click()"><img class="imgmenu" src="./style/img/line.png"></button>
        <div class="news-conatiner">`
const second_part = `</div> </main> </body> 
<script>
</script>
<script src="./style/js/index.js"></script>

</html>`

module.exports ={first_part, second_part}
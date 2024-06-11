const path = require("path")
const editFilePath = path.join(__dirname, "./style/img/edit.png")
const deleteFilePath = path.join(__dirname, "./style/img/delete.png")
//    const {  dialog } = require("electron").remote
const { ipcRenderer } = require("electron")

function getNews() {
  try {
    ipcRenderer.send("get-all-data", "news")
    ipcRenderer.on("get-all-data-response", (event, response) => {
      const tbody = document.getElementById("members-table")
      console.log(response)
      if (tbody) {
        response.forEach((newsOne) => {
          console.log(newsOne)
          const row = document.createElement("tr")
          const partOfText =
            newsOne.text.length > 150
              ? newsOne.text.substring(0, 150) + "..."
              : newsOne.text
          row.innerHTML = `
                      <td>${newsOne.title}</td>
                      <td>${partOfText}</td>
                      <td>${newsOne.date}</td>
                      <td> <button class ="table_buttom" onclick="goToNewsOne(${newsOne.id})"><img class="table_img" src ="${editFilePath}"/> </button></td>
                      <td><button class ="table_buttom" onclick="deleteNews(${newsOne.id})"><img class="table_img"  src ="${deleteFilePath}"/></button></td>
                  `
          tbody.appendChild(row)
        })
      }
    })
  } catch (err) {
    console.log(`Error: ${err}`)
    //    dialog.showErrorBox("Помилка!", "Не вдалося загрузити дані.")
  }
}

function getNewsOne() {
  try {
    ipcRenderer.send("get-data", "news", localStorage.getItem("newsID"))
    ipcRenderer.on("get-data-response", (event, response) => {
      const tbody = document.getElementById("editNews-form")
      if (tbody) {
        document.getElementById("title").value = response.title
        document.getElementById("text").value = response.text
        document.getElementById("dataNews").value = response.date
      }
    })
  } catch (err) {
    console.log(err)
    //    dialog.showErrorBox("Помилка!", "Не вдалося загрузити дані.")
  }
}

function editNews() {
  event.preventDefault()
  const title = document.getElementById("title").value
  const text = document.getElementById("text").value
  const date = document.getElementById("dataNews").value

  const newsData = {
    id: localStorage.getItem("newsID"),
    title,
    text,
    date,
  }

  try {
    ipcRenderer.send("edit-data", newsData, "news")
    ipcRenderer.on("edit-news-response", (event, response) => {
      if (!response) {
        console.log("nooooo init-response")
        //    dialog.showErrorBox(
        //      "Помилка!",
        //      "Не вдалося змініти дані новини! Можливо неправильне налаштування",
        //    )
      } else {
        localStorage.clear()
        //    dialog.showMessageBox({
        //      type: "info",
        //      title: "Успішно!",
        //      message: "Новину збережено!",
        //    })
        window.location.href = "news_table.html"
      }
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    //    dialog.showErrorBox("Помилка!", "Не вдалося зберегти новину.")
  }
}

function deleteNews(id) {
  try {
    ipcRenderer.send("delete-data", "news", id, {})
    ipcRenderer.on("delete-news-response", (event, response) => {
      if (!response) {
        console.log("nooooo init-response")
        //    dialog.showErrorBox(
        //      "Помилка!",
        //      "Не вдалося видалити новину! Можливо неправильне налаштування",
        //    )
      } else {
        console.log("siiiiiiii")
        //    dialog.showMessageBox({
        //      type: "info",
        //      title: "Успішно!",
        //      message: "Новину видалено!",
        //    })
        window.location.href = "news_table.html"
      }
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    //    dialog.showErrorBox("Помилка!", "Не вдалося видалити новину.")
  }
}

function goToNewsOne(newsID) {
  localStorage.setItem("newsID", newsID)
  window.location.href = "edit_news.html"
}

function generateId(news) {
  let flag = false
  let answer
  while (flag === false) {
    answer = Math.floor(100000 + Math.random() * 900000)
    flag = true
    for (let i = 0; i < news.length; i++) {
      const newsOne = news[i]
      if (newsOne.id == answer) {
        flag = false
        break
      }
    }
  }
  return answer
}

function addNews() {
  try {
    event.preventDefault()
    const title = document.getElementById("title").value
    const text = document.getElementById("text").value
    const date = document.getElementById("dataNews").value
    let id
    ipcRenderer.send("get-all-data", "news")
    ipcRenderer.on("get-all-data-response", (event, response) => {
      console.log(response)
      id = generateId(response)
      console.log(id)
      const newsData = {
        title,
        text,
        date,
        id: id,
      }
      ipcRenderer.send("add-data", newsData, "news")
      ipcRenderer.on("add-news-response", (event, response) => {
        if (!response) {
          console.log("nooooo init-response")
          //  dialog.showErrorBox(
          //    "Помилка!",
          //    "Не вдалося добавити новину! Можливо неправильне налаштування",
          //  )
        } else {
          console.log("siiiiiiii")
          //  dialog.showMessageBox({
          //    type: "info",
          //    title: "Успішно!",
          //    message: "Новину збережено!",
          //  })
          window.location.href = "home.html"
        }
      })
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    //    dialog.showErrorBox("Помилка!", "Не вдалося добавити новину.")
  }
}
getNews()
getNewsOne()

const path = require("path")
const editFilePath = path.join(__dirname, "./style/img/edit.png")
const deleteFilePath = path.join(__dirname, "./style/img/delete.png")

// const { dialog } = require('electron').remote;
const { ipcRenderer } = require("electron")

function getMeets() {
  try {
    ipcRenderer.send("get-all-data", "meets")
    ipcRenderer.on("get-all-data-response", (event, response) => {
      const tbody = document.getElementById("members-table")
      if (tbody) {
        response.forEach((meet) => {
          const row = document.createElement("tr")
          const partOfText =
            meet.text.length > 150 ? meet.text.substring(0, 150) + "..." : meet.text
          row.innerHTML = `
                          <td>${meet.title}</td>
                          <td>${partOfText}</td>
                          <td>${meet.date}</td>
                          <td> <button class ="table_buttom" onclick="goToMeet(${meet.id})"><img class="table_img" src ="${editFilePath}"/> </button></td>
                          <td><button class ="table_buttom" onclick="deleteMeet(${meet.id})"><img class="table_img"  src ="${deleteFilePath}"/></button></td>
                      `
          tbody.appendChild(row)
        })
      }
    })
  } catch (err) {
    console.log(`Error: ${err}`)
    //   dialog.showErrorBox("Помилка!", "Не вдалося загрузити дані.")
  }
}
function getMeet() {
  try {
    ipcRenderer.send("get-data", "meets", localStorage.getItem("meetID"))
    ipcRenderer.on("get-data-response", (event, response) => {
      const tbody = document.getElementById("editMeet-form")
      if (tbody) {
        document.getElementById("title").value = response.title
        document.getElementById("text").value = response.text
        document.getElementById("dataNews").value = response.date
      }
    })
  } catch (err) {
    console.log(err)
    //   dialog.showErrorBox("Помилка!", "Не вдалося загрузити дані.")
  }
}

function editMeet() {
  event.preventDefault()
  const title = document.getElementById("title").value
  const text = document.getElementById("text").value
  const date = document.getElementById("dataNews").value

  const meetData = {
    id: localStorage.getItem("meetID"),
    title,
    text,
    date,
  }

  try {
    ipcRenderer.send("edit-data", meetData, "meets")
    ipcRenderer.on("edit-meets-response", (event, response) => {
      if (!response) {
        console.log("nooooo init-response")
        dialog.showErrorBox(
          "Помилка!",
          "Не вдалося змініти дані засідання! Можливо неправильне налаштування",
        )
      } else {
        localStorage.clear()
        dialog.showMessageBox({
          type: "info",
          title: "Успішно!",
          message: "Засідання збережено!",
        })
        window.location.href = "meets_table.html"
      }
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    // Show an error message if there's an issue with saving
    // dialog.showErrorBox('Помилка!', 'Не вдалося зберегти засідання.');
  }
}

function deleteMeet(id) {
  try {
    ipcRenderer.send("delete-data", "meets", id, {})
    ipcRenderer.on("delete-meets-response", (event, response) => {
      if (!response) {
        console.log("nooooo init-response")
        //    dialog.showErrorBox(
        //      "Помилка!",
        //      "Не вдалося видалити засідання! Можливо неправильне налаштування",
        //    )
      } else {
        console.log("siiiiiiii")
        //    dialog.showMessageBox({
        //      type: "info",
        //      title: "Успішно!",
        //      message: "Засідання видалено!",
        //    })
        window.location.href = "meets_table.html"
      }
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    // Show an error message if there's an issue with saving
    // dialog.showErrorBox('Помилка!', 'Не вдалося зберегти налаштування.');
  }
}

function goToMeet(meetID) {
  localStorage.setItem("meetID", meetID)
  window.location.href = "edit_meet.html"
}

function generateId(meets) {
  let flag = false
  let answer
  while (flag === false) {
    answer = Math.floor(100000 + Math.random() * 900000)
    flag = true
    for (let i = 0; i < meets.length; i++) {
      const meet = meets[i]
      if (meet.id == answer) {
        flag = false
        break
      }
    }
  }
  return answer
}

function addMeet() {
  try {
    event.preventDefault()
    const title = document.getElementById("title").value
    const text = document.getElementById("text").value
    const date = document.getElementById("dataNews").value
    let id
    ipcRenderer.send("get-all-data", "meets")
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
      ipcRenderer.send("add-data", newsData, "meets")
      ipcRenderer.on("add-meets-response", (event, response) => {
        if (!response) {
          console.log("nooooo init-response")
          //  dialog.showErrorBox(
          //    "Помилка!",
          //    "Не вдалося добавити засідання! Можливо неправильне налаштування",
          //  )
        } else {
          console.log("siiiiiiii")
          //  dialog.showMessageBox({
          //    type: "info",
          //    title: "Успішно!",
          //    message: "Засідання збережено!",
          //  })
          window.location.href = "home.html"
        }
      })
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    // Show an error message if there's an issue with saving
    // dialog.showErrorBox('Помилка!', 'Не вдалося зберегти налаштування.');
  }
}
getMeets()
getMeet()

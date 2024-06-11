const path = require("path")
const editFilePath = path.join(__dirname, "./style/img/edit.png")
const deleteFilePath = path.join(__dirname, "./style/img/delete.png")

// const {  dialog } = require("electron").remote
const { ipcRenderer } = require("electron")
const { response } = require("express")

function getMembers() {
  try {
    ipcRenderer.send("get-all-data", "users")
    ipcRenderer.on("get-all-data-response", (event, response) => {
      const tbody = document.getElementById("members-table")
      if (tbody) {
        response.forEach((member) => {
          const row = document.createElement("tr")
          row.innerHTML = `
                    <td>${member.name}</td>
                    <td>${member.surname}</td>
                    <td>${member.last}</td>
                    <td>${member.email}</td>
                    <td>${member.themes}</td>
                    <td> <button class ="table_buttom" onclick="goToMember(${member.id})"><img class="table_img" src ="${editFilePath}"/> </button></td>
                    <td><button class ="table_buttom" onclick="deleteMember(${member.id})"><img class="table_img"  src ="${deleteFilePath}"/></button></td>
                `
          tbody.appendChild(row)
        })
      }
    })
  } catch (err) {
    console.log(`Error: ${err}`)
    // dialog.showErrorBox("Помилка!", "Не вдалося загрузити дані.")
  }
}
function getMember() {
  try {
    ipcRenderer.send("get-data", "users", localStorage.getItem("userID"))
    ipcRenderer.on("get-data-response", (event, response) => {
      const tbody = document.getElementById("editmember-form")
      if (tbody) {
        document.getElementById("name").value = response.name
        document.getElementById("surname").value = response.surname
        document.getElementById("last").value = response.last
        document.getElementById("themes").value = response.themes
        document.getElementById("email").value = response.email
        localStorage.setItem("ticket", response.ticket)
      }
    })
  } catch (err) {
    console.log(err)
    // dialog.showErrorBox("Помилка!", "Не вдалося загрузити дані.")
  }
}

function editMember() {
  event.preventDefault()
  const name = document.getElementById("name").value
  const surname = document.getElementById("surname").value
  const last = document.getElementById("last").value
  const email = document.getElementById("themes").value
  const themes = document.getElementById("email").value
  let ticket = localStorage.getItem("ticket")

  const memberData = {
    id: localStorage.getItem("userID"),
    name,
    surname,
    last,
    email,
    themes,
    ticket,
  }

  try {
    ipcRenderer.send("edit-data", memberData, "users")
    ipcRenderer.on("edit-users-response", (event, response) => {
      if (!response) {
        console.log("nooooo init-response")
        // dialog.showErrorBox(
        //   "Помилка!",
        //   "Не вдалося змініти дані користувача! Можливо неправильне налаштування",
        // )
      } else {
        localStorage.clear()
        // dialog.showMessageBox({
        //   type: "info",
        //   title: "Успішно!",
        //   message: "Користувача збережено!",
        // })
        window.location.href = "member_table.html"
      }
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    // Show an error message if there's an issue with saving
    // dialog.showErrorBox("Помилка!", "Не вдалося змініти дані  користувача.")
  }
}

function deleteMember(id) {
  try {
    ipcRenderer.send("delete-data", "users", id, {})
    ipcRenderer.on("delete-users-response", (event, response) => {
      if (!response) {
        console.log("nooooo init-response")
        // dialog.showErrorBox(
        //   "Помилка!",
        //   "Не вдалося видалити користувача! Можливо неправильне налаштування",
        // )
      } else {
        console.log("siiiiiiii")
        // dialog.showMessageBox({
        //   type: "info",
        //   title: "Успішно!",
        //   message: "Користувача видалено!",
        // })
        window.location.href = "member_table.html"
      }
    })
  } catch (err) {
    console.error("Error saving settings:", err)
    // Show an error message if there's an issue with saving
    // dialog.showErrorBox("Помилка!", "Не вдалося видалити користувача.")
  }
}

function goToMember(userID) {
  localStorage.setItem("userID", userID)
  window.location.href = "edit_member.html"
}

function generateTicketNumber(members) {
  let flag = false
  let answer
  while (flag === false) {
    answer = Math.floor(100000 + Math.random() * 900000)
    flag = true
    for (let i = 0; i < members.length; i++) {
      const member = members[i]
      if (member.ticket === answer) {
        flag = false
        break
      }
    }
  }
  return answer
}
function generateId(members) {
  let flag = false
  let answer
  while (flag === false) {
    answer = Math.floor(100000 + Math.random() * 900000)
    flag = true
    for (let i = 0; i < members.length; i++) {
      const member = members[i]
      if (member.id == answer) {
        flag = false
        break
      }
    }
  }
  return answer
}

function addMemeber() {
    try {
  event.preventDefault()
  console.log("add member")
  const nameInput = document.getElementById("name")
  const surnameInput = document.getElementById("surname")
  const lastInput = document.getElementById("last")
  const themesInput = document.getElementById("themes")
  const emailInput = document.getElementById("email")

  const name = nameInput.value
  const surname = surnameInput.value
  const last = lastInput.value
  const email = emailInput.value
  const themes = themesInput.value
  let ticket, id
  ipcRenderer.send("get-all-data", "users")
  ipcRenderer.on("get-all-data-response", (event, response) => {
    ticket = generateTicketNumber(response)
    id = generateId(response)
    const memberData = {
        name,
        surname,
        last,
        email,
        themes,
        ticket,
        id,
    }
    ipcRenderer.send("add-data", memberData, "users")
    ipcRenderer.on("add-users-response", (event, response) => {
      if (!response) {
        console.log("nooooo init-response")
        // dialog.showErrorBox(
        //   "Помилка!",
        //   "Не вдалося добавити користувача! Можливо неправильне налаштування",
        // )
      } else {
        console.log("siiiiiiii")
        // dialog.showMessageBox({
        //   type: "info",
        //   title: "Успішно!",
        //   message: "Користувача збережено!",
        // })
        window.location.href = "home.html"
      }
    })

  })


   
  } catch (err) {
    console.error("Error saving settings:", err)
    // Show an error message if there's an issue with saving
    // dialog.showErrorBox("Помилка!", "Не вдалося добавити користувача.")
  }
}

getMembers()
getMember()

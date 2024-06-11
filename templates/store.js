const second_part=`const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore(app)

function generateToken(length = 32) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let token = ""
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return token
}

async function getData() {
  const ticket = localStorage.getItem("ticket")

  if (!ticket) return false

  const usersRef = db.collection("users").where("ticket", "==", Number(ticket))
  const querySnapshot = await usersRef.get()
  return querySnapshot.docs[0].data()
}

async function verifyToken() {
  const token = localStorage.getItem("authToken")
  if (!token) return false

  const tokenRef = db.collection("tokens").where("token", "==", token)
  const querySnapshot = await tokenRef.get()

  return !querySnapshot.empty
}

async function loginBD(ticket, surname) {
  try {
    const usersRef = db.collection("users")
    const q = usersRef
      .where("surname", "==", surname)
      .where("ticket", "==", Number(ticket))
    const querySnapshot = await q.get()
    console.log("Query Snapshot:", querySnapshot)
    if (querySnapshot.empty) {
      console.error("User not found with the provided ticket and surname")
      return false
    }

    const userDoc = querySnapshot.docs[0]
    const token = generateToken()
    localStorage.setItem("authToken", token)
    localStorage.setItem("ticket", ticket)
    await db
      .collection("tokens")
      .doc(userDoc.id)
      .set({ token, createdAt: new Date() })
    return true
  } catch (error) {
    console.error("Error during login:", error)
    return false
  }
}
async function login_user(event) {
  try {
    event.preventDefault()
    console.log("login_user")

    const ticketInput = document.getElementById("ticket-input").value
    const surnameInput = document.getElementById("surname-input").value
    console.log(ticketInput, surnameInput)

    const success = await loginBD(ticketInput, surnameInput)
    console.log(success)
    if (success) {
      window.location.href = "home.html"
    } else {
      document.getElementById("error_login").style.display = "block"
    }
  } catch (error) {
    console.error("Login failed:", error)
    document.getElementById("error_login").style.display = "block"
  }
}`
module.exports = second_part
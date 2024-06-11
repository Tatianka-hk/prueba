const { initializeApp } = require("firebase/app")
const {
  getFirestore,
  doc,
  collection,
  setDoc,
  updateDoc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
} = require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDfDZUOgJSS1iaNR57tbK5GDywz1xwwWRs",
  authDomain: "control-93906.firebaseapp.com",
  projectId: "control-93906",
  storageBucket: "control-93906.appspot.com",
  messagingSenderId: "672018658120",
  appId: "1:672018658120:web:a39574e6ffbbc283eaf97d",
  measurementId: "G-LXYZ88SP6W",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getAllDataFromFirestore(collectionName) {
  try {
    const collectionRef = collection(db, collectionName)
    const querySnapshot = await getDocs(collectionRef)
    const res = []
    querySnapshot.docs.forEach((doc) => {
      res.push(doc.data())
    })
    return res
    console.log("Documents successfully got!")
  } catch (error) {
    console.error("Error getting documents: ", error)
  }
}
async function getDataFromFirestore(collectionName, ID) {
  try {
    console.log(collectionName)
    const dataID = String(ID)
    const userRef = doc(db, collectionName, dataID)
    const querySnapshot = await getDoc(userRef)
    console.log("sdsdsff", querySnapshot.data())
    return querySnapshot.data()
    console.log("Document successfully got!")
  } catch (error) {
    console.error("Error getting document: ", error)
  }
}

async function addDataToFirestore(newData, collectionName) {
  const dataID = String(newData.id)
  try {
    console.log(newData,"-", collectionName)
    const userRef = doc(db, collectionName, dataID)
    await setDoc(userRef, newData)
    console.log("Document successfully written!")
  } catch (error) {
    console.error("Error writing document: ", error)
  }
}

async function deleteDataFromFirestore(dataID, collectionName) {
  const dataIDString = String(dataID)
  try {
    const docRef = doc(db, collectionName, dataIDString)
    await deleteDoc(docRef)
    console.log("Document successfully removed!")
  } catch (error) {
    console.error("Error removing document:", error)
  }
}

async function editDataInFirestore(dataID, collectionName, updatedData) {
  const dataIDString = String(dataID)
  console.log(dataIDString)
  console.log(collectionName)
  try {
    const docRef = doc(db, collectionName, dataIDString)
    await updateDoc(docRef, updatedData)
    console.log("Document successfully updated!")
  } catch (error) {
    console.error("Error updating document:", error)
  }
}

module.exports = {
  addDataToFirestore,
  deleteDataFromFirestore,
  editDataInFirestore,
  getAllDataFromFirestore,
  getDataFromFirestore,
}

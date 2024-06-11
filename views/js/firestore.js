// const { dialog } = require('electron').remote;
const { ipcRenderer } = require("electron")
const path = require('path');
const settingFilePath = path.join(__dirname, "../bd/firestore.js");
const setting = require(settingFilePath)
// function get_setting(){
//     const tbody = document.getElementById('edit-settings-form');
//     if (tbody){
//         document.getElementById('name').value = setting.name
//         document.getElementById('surname').value  = setting.surname
//         document.getElementById('last').value =   setting.last
//         document.getElementById('themes').value  = setting.themes
//         document.getElementById('email').value = setting.email
//     }
// }

// function edit_setting(){
//     event.preventDefault();
//     const loginInput = document.getElementById('login');
//     const logoInput = document.getElementById('logo');
//     const repoUrlInput = document.getElementById('repoUrl');
//     const repoTokenInput = document.getElementById('repoToken');
//     const emailInput = document.getElementById('email');

//     const login = loginInput.value;
//     const repoUrl = repoUrlInput.value;
//     const repoToken = repoTokenInput.value;
//     const email = emailInput.value;

//     const settingsData = {
//         login: login,
//         logoPath: logoPath,
//         repoUrl: repoUrl,
//         repoToken,
//         email
//     };

//     try {
//         ipcRenderer.send("edit-setting",settingsData )

//         // dialog.showMessageBox({
//         //     type: 'info',
//         //     title: 'Успішно!',
//         //     message: 'Налаштування збережено!'
//         // });
//         localStorage.clear()
        
//         window.location.href = 'home.html';

//     } catch (err) {
//         console.error('Error saving settings:', err);
//         // Show an error message if there's an issue with saving
//         // dialog.showErrorBox('Помилка!', 'Не вдалося зберегти налаштування.');
//     }
// }
// get_setting()


function get_setting(){
    const tbody = document.getElementById('edit-firestore-form');
    if (tbody){
        document.getElementById('apiKey').value = setting.apiKey
        document.getElementById('authDomain').value  = setting.authDomain
        document.getElementById('projectId').value =   setting.projectId
        document.getElementById('storageBucket').value  = setting.storageBucket
        document.getElementById('messagingSenderId').value = setting.messagingSenderId
        document.getElementById('appId').value  = setting.appId
        document.getElementById('measurementId').value = setting.measurementId
    }
}

function edit_setting(){
    event.preventDefault();
    const apiKey = document.getElementById('apiKey').value
    const authDomain =document.getElementById('authDomain').value
    const projectId = document.getElementById('projectId').value
    const storageBucket =  document.getElementById('storageBucket').value
    const messagingSenderId =document.getElementById('messagingSenderId').value
    const appId =  document.getElementById('appId').value 
    const measurementId =  document.getElementById('measurementId').value 

    const settingsData = {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
        measurementId
    };

    try {
        ipcRenderer.send("edit-firestore",settingsData )

        // dialog.showMessageBox({
        //     type: 'info',
        //     title: 'Успішно!',
        //     message: 'Налаштування збережено!'
        // });
        localStorage.clear()
        
        window.location.href = 'change_setting.html';

    } catch (err) {
        console.error('Error saving settings:', err);
        // Show an error message if there's an issue with saving
        // dialog.showErrorBox('Помилка!', 'Не вдалося зберегти налаштування.');
    }
}
get_setting()

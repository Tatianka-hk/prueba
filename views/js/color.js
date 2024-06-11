// const { dialog } = require('electron').remote;
const { ipcRenderer } = require("electron")
const path = require('path');
const settingFilePath = path.join(__dirname, "../bd/colors.js");
const setting = require(settingFilePath)


function get_setting(){
    const tbody = document.getElementById('edit-colors-form');
    if (tbody){
        document.getElementById('primaryColor').value = setting.primaryColor
        document.getElementById('secondColor').value  = setting.secondColor
        document.getElementById('accentColor').value =   setting.accentColor
    }
}

function edit_color(){
    event.preventDefault();
    const primaryColor = document.getElementById('primaryColor').value
    const secondColor =document.getElementById('secondColor').value
    const accentColor = document.getElementById('accentColor').value 

    const settingsData = {
        primaryColor,
        secondColor,
        accentColor,
    };

    try {
        ipcRenderer.send("edit-color",settingsData )

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


function editLogo(){
    const logoInput = document.getElementById('logo').files[0];;
    try {
        const logoPath = logoInput.path; 
        // Show a message box to indicate successful saving
        // dialog.showMessageBox({
        //     type: 'info',
        //     title: 'Успішно!',
        //     message: 'Налаштування збережено!'
        // });
        ipcRenderer.send("edit-logo", logoPath)
        window.location.href = 'home.html';

    } catch (err) {
        console.error('Error saving settings:', err);
        // Show an error message if there's an issue with saving
        // dialog.showErrorBox('Помилка!', 'Не вдалося зберегти налаштування.');
    }
}
get_setting()





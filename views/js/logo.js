// const { dialog } = require('electron').remote;
const { ipcRenderer } = require("electron")
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
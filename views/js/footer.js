const path = require('path');
// const { dialog } = require('electron').remote;
const { ipcRenderer } = require("electron")
const footerFilePath = path.join(__dirname, "../bd/footer.js");
const footer = require(footerFilePath)
const deleteFilePath = path.join(__dirname, "./style/img/delete.png");

let contactMethodCount = 0
const maxContactMethods = 4;

function addContactMethod() {
    if (contactMethodCount >= maxContactMethods) {
        alert('You can add up to 5 contact methods only.');
        return;
    }

    contactMethodCount++;
    console.log(contactMethodCount)

    const container = document.createElement('div');
    container.className = 'contact-method';

    const contactInput = document.createElement('input');
    contactInput.type = 'text';
    contactInput.name = `contact_method`;
    contactInput.placeholder = 'Contact Method';

    const linkInput = document.createElement('input');
    linkInput.type = 'text';
    linkInput.name = `link_${contactMethodCount}`;
    linkInput.placeholder = 'Link';

    container.appendChild(contactInput);
    container.appendChild(linkInput);

    document.getElementById('contact-methods').appendChild(container);
}

function loadContactMethod(contactMethod, link) {

    const container = document.createElement('div');
    container.className = 'contact-method';

    const contactInput = document.createElement('input');
    contactInput.type = 'text';
    contactInput.name = `contact_method`;
    contactInput.placeholder = 'Contact Method';
    contactInput.value = contactMethod

    const linkInput = document.createElement('input');
    linkInput.type = 'text';
    linkInput.name = `link`;
    linkInput.placeholder = 'Link';
    linkInput.value = link

    const deleteFooter = document.createElement('button');
    const deleteIcon = document.createElement('img')
    deleteIcon.src = deleteFilePath;
    deleteIcon.className = "table_img"
    deleteFooter.appendChild(deleteIcon);
    deleteFooter.onclick = () => deleteContactMethod(container); 

    container.appendChild(contactInput);
    container.appendChild(linkInput);
    container.appendChild(deleteFooter);

    document.getElementById('contact-methods').appendChild(container);
}
function loadFooter() {
    footer.forEach(({ contactMethod, link }) => {
        contactMethodCount++
        loadContactMethod(contactMethod, link);
    });
    contactMethodCount = footer.length
    console.log(contactMethodCount)
}
function deleteContactMethod(container) {
    document.getElementById('contact-methods').removeChild(container);
    contactMethodCount--;
}


function editFooter(){
    console.log(contactMethodCount)
    
    const contactMethods = [];
    for (let i = 0; i < contactMethodCount; i++) {
        console.log(`contact_method__${i}`)
        const contactMethod = document.querySelectorAll(`[name=contact_method]`)[i].value;
        const link = document.querySelector(`[name=link]`).value;
        contactMethods.push({ contactMethod, link });
    }
    try {
        // Show a message box to indicate successful saving
        // dialog.showMessageBox({
        //     type: 'info',
        //     title: 'Успішно!',
        //     message: 'Налаштування збережено!'
        // });
        ipcRenderer.send("edit-footer", contactMethods)
        window.location.href = 'home.html';

    } catch (err) {
        console.error('Error saving settings:', err);
        // Show an error message if there's an issue with saving
        // dialog.showErrorBox('Помилка!', 'Не вдалося зберегти налаштування.');
    }
}
loadFooter()
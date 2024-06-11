const fs = require("fs")
const path = require("path")
const PDFDocument = require('pdfkit');
const { getAllDataFromFirestore } = require("./addtoBase.js")

async function generateMemberHtml(dir) {
  const members = await getAllDataFromFirestore("users")
  let text = ``
  members.forEach((member) => {
    text += `<div class="member-container">\
        <div class="member-info">\
            <div class="member-PIB">${member.surname} ${member.name} ${member.last}</div>\`
            <div class="member-Description">\
                ${member.themes}\
            </div>
          </div>
        </div> `
  })
  putDataInFile(path.join(dir, "members.html"), text, "members.js")
}

async function generateMeetsHtml(dir) {
  const meets = await getAllDataFromFirestore("meets")
  let text = ``
  meets.forEach((meet) => {
    text += `<div class="news">
        <div class="news-header">
            <a class="news-title" href = "docs/${meet.title}.pdf">${meet.title}</a>
            <div class="news-data">${meet.date}</div>
         </div>
        <div class="news-text">${meet.text}</div>
      </div>`
  })
  putDataInFile(path.join(dir, "meets.html"), text, "meets.js")
}

async function generateNewsFiles(dir) {
  const news = await getAllDataFromFirestore("news")
  const lastFiveNews = news.slice(-5)
  const allNews = generateNewsContainer(news)
  const fiveNews = generateNewsContainer(lastFiveNews)
  putDataInFile(path.join(dir, "news.html"), allNews, "news.js")
  putDataInFile(path.join(dir, "index.html"), fiveNews, "index.js")
  putDataInFile(path.join(dir, "home.html"), fiveNews, "home.js")
}
function generateNewsContainer(newsArray) {
  let text = ``
  newsArray.forEach((one_news) => {
    text += `<div class="news">
        <div class="news-header">
            <div class="news-title">${one_news.title}</div>
            <div class="news-data">${one_news.date}</div>
         </div>
        <div class="news-text">${one_news.text}/div>
      </div>
    </div>`
  })
  return text
}

function genereteFooter(dir) {
  let text = ``
  footer.forEach((contact) => {
    text += `<div>${contact.contactMethod} : ${contact.link}</div>`
  })
  putDataInFile(path.join(dir, "./style/js/parts/footer.js"), text, "footer.js")
}

function putDataInFile(filePath, data_to_put, flleName) {
  const { first_part, second_part } = require(`../templates/${flleName}`)
  const textToPut = first_part + data_to_put + second_part
  console.log(flleName)
  console.log(first_part, second_part)

  fs.writeFile(filePath, textToPut, (err) => {
    if (err) {
      console.error("Error in recording to the file:", err)
      return
    }
  })
}

function generateStore(filePath) {
  console.log(firestore)
  const second_part = require("../templates/store.js")
  const firestoreToPut = JSON.stringify(firestore, null, 4)
  console.log(firestoreToPut)
  const textToPut = `const firebaseConfig = ${firestoreToPut}`
  const fullText = textToPut + second_part
  console.log(fullText)
  fs.writeFile(filePath, fullText, (err) => {
    if (err) {
      console.error("Error in recording to the file:", err)
      return
    }
  })
}

function genereteColor(filePath) {
  console.log(colors)
  const colorsToPut = JSON.stringify(colors, null, 4)
  console.log(colorsToPut)
  const textToPut = `const colors = ${colorsToPut}`
  console.log(textToPut)
  fs.writeFile(filePath, textToPut, (err) => {
    if (err) {
      console.error("Error in recording to the file:", err)
      return
    }
  })
}

function createPage(dir, text) {
  fs.writeFile(dir, text, (err) => {
    if (err) {
      console.error("Error in recording to the file:", err)
      return
    }
  })
}

async function createDocument(dir, newData){
  const fileName = path.join(dir, `docs/${newData.title}.pdf`)
  console.log(fileName)
  await createPDF(fileName, newData, dir)
  return fileName
}
// delete old file
async function createPDF (fileName, newData, dir)  {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(fileName));

  doc.registerFont('OpenSans', `${dir}/docs/fonts/OpenSans-Regular.ttf`);
  doc.image(`${dir}/style/img/logo.png`, {
    fit: [150, 150],
    align: 'center',
    valign: 'top'
  });
  doc.font('OpenSans');
  doc.moveDown(2);
  doc.fillColor('blue')
    .fontSize(16)
    .text('№140207-1 від «7» лютого 2014 р.', { align: 'center' });

  doc.moveDown();
  doc.fillColor('black')
    .fontSize(20)
    .text('ПРОТОКОЛ', { align: 'center' });

  doc.moveDown();
  doc.fontSize(16)
    .text('Засідання членів ГО «Громадський аналітичний центр»', { align: 'center' });

  // Присутні
  doc.moveDown();
  doc.fillColor('red')
    .fontSize(14)
    .text('ПРИСУТНІ:', { underline: true });

  doc.fillColor('black')
    .text('1. Баклан Ігор Всеволодович');

  // Порядок денний
  doc.moveDown();
  doc.fillColor('red')
    .text('ПОРЯДОК ДЕННИЙ', { underline: true });

  doc.fillColor('black')
    .text('1. Розгляд заявок та включення нових членів до ГО «Громадський аналітичний центр».');

  // Перше питання
  doc.moveDown();
  doc.fillColor('red')
    .text('ПО ПЕРШОМУ ПИТАННЮ:', { underline: true });

  doc.fillColor('black')
    .text('Слухали: Баклана Ігора Всеволодовича, керівника ГО «Громадський аналітичний центр», який запропонував Ковтунця Олеся Володимировича як кандидата у члени ГО «Громадський аналітичний центр».');

  // Результати голосування
  doc.moveDown();
  doc.fillColor('red')
    .text('Результати голосування:', { underline: true });

  doc.fillColor('black')
    .text('«За» - 1')
    .text('«Проти» - 0')
    .text('«Утрималось» - 0');

  doc.moveDown();
  doc.text('Рішення прийнято.');

  // Вирішили
  doc.moveDown();
  doc.fillColor('black')
    .text('Вирішили: Прийняти Ковтунця Олеся Володимировича як нового члена ГО «Громадський аналітичний центр».');

  // Підписи
  doc.moveDown(2);
  doc.text('Секретар засідання                                                                                     Баклан І.В.', { align: 'left' });
  doc.moveDown();
  doc.text('Голова засідання                                                                                     Баклан І.В.', { align: 'left' });

  // Завершення документу
  doc.end();
};
module.exports = {
  generateMemberHtml,
  generateNewsFiles,
  generateMeetsHtml,
  generateStore,
  genereteColor,
  genereteFooter,
  createPage,
  createDocument
}

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

console.log("welcome to my qrCode genrator!");

const question = [
    {
        type: 'input',
        name: 'url',
        message: 'What is your URL?',
    }
]

inquirer.prompt(question).then((answers) => {
    const userURL = answers.url;
    urlValidate(userURL);
});

function urlValidate(url) {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    
    if (url.match(regex))
    {
        console.log(`You entered the URL: ${url}`);
        console.log('\nDone');
        generateQR(url);
        saveTextFile(url);
    }
    else
    {
        console.log("Please enter a valid URL!");
    }
}

function generateQR(url2) {
    var fileName = "URL - " + url2.substring(4, url2.length - 4);
    var qrPNG = qr.image(url2, {type: 'png'});
    qrPNG.pipe(fs.createWriteStream(fileName + '.png'));
}

function saveTextFile(url3) {
    fs.writeFile("user urls.txt", url3, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');});
}


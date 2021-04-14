const { reader } = require('../util');
const mkFiles = require('../models/mkfiles');
const fs = require('fs');
const path = require('path');
const HtmlTemplate = require('../models/HtmlTemplate');

/**
 * 
 * @param {string} appDir - path of the directory
 * @param {object} options - option object for build folder
 */

const build = (appDir, options) => {
    let markdownFiles = reader(appDir).map(fName => {
        return new mkFiles(fName, appDir, fs.readFileSync(path.resolve(appDir, fName)));
    })

    // generating html templates 
    generateHtml(appDir, 'dist', markdownFiles, HtmlTemplate.basicTemplate);
}


const generateHtml = ({ appDir, distFolderName, files, htmlTemplate }) => {
    files.forEach(file => {
        fs.writeFileSync(
            path.resolve(appDir, distFolderName, file.getFileName()),
            htmlTemplate(file.getHtmlContent)
        )
    })
}


module.exports = build;
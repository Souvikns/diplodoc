const { reader } = require('../util');
const mkFiles = require('../models/mkfiles');
const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {string} appDir - path of the directory
 * @param {object} options - option object for build folder
 */
const build = (appDir, options) => {
    let markdownFiles = reader(appDir).map(fName => {
        return new mkFiles(fName, appDir, fs.readFileSync(path.resolve(appDir, fName)));
    })
}

module.exports = build;
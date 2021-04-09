const fs = require('fs');
const _ = require('lodash');

exports.reader = (dirPath, fileExtRegex) => {
    let folderContains = fs.readdirSync(dirPath);
    return _.filter(folderContains, file => {
        if(fileExtRegex.test(file)) return file
    })
}
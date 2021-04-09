const fs = require('fs');

exports.reader = (dirPath, fileExtRegex) => {
    let folderContains = fs.readdirSync(dirPath);
    return folderContains.map(files => fileExtRegex.test(files))
}
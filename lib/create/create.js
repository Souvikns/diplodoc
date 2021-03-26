const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');

// TODO: Spit out the folder structure
class DiplodocApp {
    basePath;
    name;
    constructor(basePath, name){
        this.basePath(basePath);
        this.name;
    }

    create(){
        // TODO: First generate package.json

        // TODO: Install the needed dependencies 
        // TODO: Spit out all the template files and folders
    }
}

const genFile = (folderPath, fileName, content) => {
    fs.writeFileSync(path.resolve(folderPath, fileName),content);
}

module.exports = {
    DiplodocApp
}
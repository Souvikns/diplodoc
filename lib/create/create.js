const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// TODO: Spit out the folder structure
class DiplodocApp {
    _basePath;
    _name;
    _packageJson;
    constructor(basePath, name) {
        this._basePath = basePath;
        this._name = name;

        this._packageJson = `
        {
            "name": "${this.name}",
            "version": "1.0.0",
            "scripts": {
                "start": "diplodoc start",
                "dev": "diplodoc dev",
                "build": "diplodc build"
            }
        }
        `
    }

    create() {
        genFile(this._basePath, "package.json", this._packageJson);
        // TODO: Install the needed dependencies 
        // TODO: Spit out all the template files and folders
    }
}

const genFile = (folderPath, fileName, content) => {
    fs.writeFileSync(path.resolve(folderPath, fileName), content);
}

// TODO: Create npm init style package.json creation
const genPackageJson = () => {

}

module.exports = {
    DiplodocApp
}
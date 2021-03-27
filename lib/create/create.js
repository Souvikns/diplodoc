const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// TODO: Spit out the folder structure
class DiplodocApp {
    _basePath;
    _inputOptions
    _packageJson;
    constructor(basePath, inputOptions) {
        this._basePath = basePath;
        this._inputOptions = inputOptions
        this._packageJson = `
        {
            "name": "${this._inputOptions.name}",
            "version": "1.0.0",
            "scripts": {
                "start": "diplodoc start",
                "dev": "diplodoc dev",
                "build": "diplodc build"
            },
            "license": "${this._inputOptions.license}"
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

const installDevDependencies = (folderPath) => {
    // TODO: Istall all the dev dependencies here
}

module.exports = {
    DiplodocApp
}
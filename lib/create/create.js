const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const chalk = require('chalk');
const { indexMd } = require('../templates')

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
        installDevDependencies(this._basePath, this._inputOptions.pkgManager);
        startupFiles(this._basePath);
    }
}

const genFile = (folderPath, fileName, content) => {
    fs.writeFileSync(path.resolve(folderPath, fileName), content);
}

const installDevDependencies = (folderPath, pkg) => {
    console.log(chalk.green("Installing dependencies"));
    if (pkg === "yarn") {
        exec('yarn add diplodoc -D', (err, stdout, stderr) => {
            if (err) {
                throw err;
            }
            console.log(stdout);
        })
    } else {
        exec('npm i --save-dev diplodoc', (err, stdout, stderr) => {
            if (err) {
                throw err;
            }
            console.log(stdout);
        })
    }
}

const startupFiles = (basePath) => {
    fs.writeFileSync(path.resolve(basePath, "pages", "index.md"), indexMd);
    fs.mkdirSync(path.resolve(basePath, "static"));
}

module.exports = {
    DiplodocApp
}
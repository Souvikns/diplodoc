const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');

// TODO: Spit out the folder structure
class DiplodocApp {
    basePath;
    files;
    constructor(basePath){
        this.basePath(basePath);
    }

    create(){
        // TODO: First generate package.json
        // TODO: Install the needed dependencies 
        // TODO: Spit out all the template files and folders
    }
}

module.exports = {
    DiplodocApp
}
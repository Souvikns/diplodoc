const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');

class DiplodocApp {
    basePath;
    constructor(basePath){
        this.basePath(basePath);
    }
}

module.exports = {
    DiplodocApp
}
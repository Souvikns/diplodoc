const chokidar = require('chokidar');
const MarkdownFile = require('./mkfiles');

class DiplodocApp {
    _appDir
    _markdownFiles
    constructor(appDir) {
        this._appDir = appDir;
    }

    // TODO: reads all the files and generates the build folder
    build(){

    }

    // TODO: create a watcher that basically watches all the files and updates accordingly
    dev(){

    }

}

module.exports = DiplodocApp
const chokidar = require('chokidar');
const MarkdownFile = require('./mkfiles');

class DiplodocApp {
    _appDir
    _markdownFiles
    constructor(appDir) {
        this._appDir = appDir;
    }

}

module.exports = DiplodocApp
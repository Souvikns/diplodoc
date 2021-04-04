const chokidar = require('chokidar');
const MarkdownFile = require('./mkfiles');
const fs = require('fs');
const path = require('path');

class DiplodocApp {
    _appDir
    _markdownFiles
    constructor(appDir) {
        this._appDir = appDir;
    }

    // TODO: reads all the files and generates the build folder
    build(){
        this._markdownFiles = fetchMkFiles(this._appDir);
    }

    // TODO: create a watcher that basically watches all the files and updates accordingly
    dev(){

    }

}

const fetchMkFiles = (dirrpath) => {
    return fs.readdirSync(path.resolve(dirrpath)).map(fileName => {
        return new MarkdownFile(
            fileName, 
            path.resolve(dirrpath, fileName),
            fs.readFileSync(path.resolve(dirrpath, fileName), 'utf-8')
        );
    })
}

module.exports = DiplodocApp
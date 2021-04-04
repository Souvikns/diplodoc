const chokidar = require('chokidar');
const MarkdownFile = require('./mkfiles');
const fs = require('fs');
const path = require('path');

class DiplodocApp {
    _appDir
    _markdownFiles
    constructor(appDir) {
        this._appDir = appDir;
        this._markdownFiles = fetchMkFiles(this._appDir);
    }

    build() {
        fs.mkdirSync(path.resolve(this._appDir, 'build'));

        this._markdownFiles.forEach(files => {
            fs.writeFileSync(path.resolve(this._appDir, 'dir', files.getFileName()), files.getHtml());
        })
    }

    // TODO: create a watcher that basically watches all the files and updates accordingly
    dev() {

    }

}

const fetchMkFiles = (dirrpath) => {
    return fs.readdirSync(path.resolve(dirrpath)).map(fileName => {
        // TODO: check if the file in markdown file or not
        if (fileName.split('.')[1] === "md") return new MarkdownFile(
            fileName,
            path.resolve(dirrpath, fileName),
            fs.readFileSync(path.resolve(dirrpath, fileName), 'utf-8')
        );
    })
}



module.exports = DiplodocApp
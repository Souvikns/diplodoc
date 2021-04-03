const marked = require('marked');

class MarkdownFile {
    _filePath;
    _fileName;
    _content;
    constructor(fileName, filePath, content) {
        this._fileName = fileName;
        this._filePath = filePath;
        this._content = content;
    }

    getHtml() {
        return marked(this._content);
    }

    setContent(content) {
        this._content = content;
    }

    getMarked() {
        return this._content;
    }

    getFileName() {
        return this._fileName;
    }

    getFilePath() {
        return this._filePath;
    }


}

module.exports = MarkdownFile;
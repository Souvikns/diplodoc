
class DipFiles {
    _name;
    _folderPath;
    _content;
    constructor(name, folderPath, content){
        this._name = name;
        this._folderPath = folderPath;
        this._content = content;
    }

    getFileName() {
        return this._name;
    }
    getContent() {
        return this._content
    }
}

module.exports = DipFiles
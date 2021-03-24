const marked = require('marked');

class MarkdownFile {
    fileName;
    dirPath;
    content;
    constructor({ fileName, dirPath, content }) {
        this.fileName = fileName;
        this.dirPath = dirPath;
        this.content = content;
    }

    getHtml = () => marked(this.content);
}

class StaticFile {
    fileName;
    dirPath;
    type;
    content;
    encoding;
    constructor({ fileName, dirPath, content }) {
        this.fileName = fileName;
        this.dirPath = dirPath;
        this.content = content;
    }
}

class Folder {
    name;
    path;
    content = [];
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }

    addContent(type, content) {
        this.content.push({
            type,
            content
        })
    }

}

module.exports = {
    MarkdownFile,
    StaticFile,
    Folder
}
const DipFiles = require('./dipFiles');
const marked = require('marked');

class MarkdownFiles extends DipFiles {
    
    getHtmlContent () {
        return marked(this._content);
    }
}

module.exports = MarkdownFiles;
const path = require("path");
const fs = require("fs");
const marked = require("marked");

class MarkdownFile {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileName = path.basename(this.filePath);
  }

  getRawMD() {
    return fs.readFileSync(this.filePath, "utf-8");
  }

  getHTML() {
    return marked(fs.readFileSync(this.filePath, "utf-8"));
  }
}

module.exports = MarkdownFile;

const fs = require("fs");
const path = require("path");
const marked = require("marked");

class Page {
  constructor({ fileName, filePath, content }) {
    this.fileName = fileName;
    this.filePath = filePath;
    this.content = content;
  }

  generateHTML() {
    return marked(this.content);
  }
}

class Reader {
  constructor() {}
}

module.exports = {
  Reader,
  Page,
};

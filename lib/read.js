const fs = require("fs");
const path = require("path");

class Page {
  constructor({ fileName, filePath, content }) {
    this.fileName = fileName;
    this.filePath = filePath;
    this.content = content;
  }
}

class Reader {
  constructor() {}
}

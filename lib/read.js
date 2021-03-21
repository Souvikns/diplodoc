const fs = require("fs");
const path = require("path");
const marked = require("marked");

class Page {
  constructor({ fileName, filePath, content }) {
    this.fileName = fileName;
    this.filePath = filePath;
    this.content = content;
  }

  /**
   * 
   * @returns {String} - Returns the html string for only the markdown content
   */
  generateHTML() {
    return marked(this.content);
  }

  /**
   * @returns {String} - Returns complete html page with all the static paths fixed.
   */
  generatePage() {

  }
}

class Reader {
  constructor() {}
}

module.exports = {
  Reader,
  Page,
};

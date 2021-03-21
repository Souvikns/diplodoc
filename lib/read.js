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
  generatePage() { }
}

const checkIfMdFile = (fileName) => {
  let fileExt = fileName.split(".").pop();
  return fileExt === "md";
}

const reader = ({ defaultsrcPath, defaultStaticPath }) => {
  let srcPath = defaultsrcPath || 'pages';
  let staticPath = defaultStaticPath || 'static';

  let folderPath = path.resolve(process.cwd(), srcPath);

  const src = fs.readdirSync(folderPath).map(file => {
    if (fs.statSync(path.resolve(folderPath, file))) {
      if (checkIfMdFile(file)) {
        return new Page({
          fileName: file,
          filePath: path.resolve(folderPath, file),
          content: fs.readFileSync(path.resolve(folderPath, file))
        })
      }
    }
  });

  return {
    src
  }
}

module.exports = {
  Page,
};

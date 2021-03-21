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
  generatePage() {}
}

const checkIfMdFile = (fileName) => {
  let fileExt = fileName.split(".").pop();
  return fileExt === "md";
}

class Reader {
  constructor({ srcPath, staticPath }) {
    this.defaultSrcFolder = srcPath || "pages";
    this.defaultStaticFolder = staticPath || "static";
  }

  getAllPages() {
    let pages = fs.readdirSync(
      path.resolve(process.cwd(), this.defaultSrcFolder)
    );
    return pages.map((page) => {
      if (page.includes("."))
        return new Page({
          fileName: page,
          filePath: path.resolve(process.cwd(), this.defaultSrcFolder, page),
          content: fs.readFileSync(
            path.resolve(process.cwd(), this.defaultSrcFolder, page)
          ),
        });
    });
  }
}

module.exports = {
  Reader,
  Page,
};

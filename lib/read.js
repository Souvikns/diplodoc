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

  generatePage() { }
}

class Folder {
  name;
  path;
  contents = [];
  constructor(folderName, folderPath) {
    this.name = folderName;
    this.path = folderPath;
  }

  addContent(type, content) {
    this.contents.push({
      type, content
    })
  }
}

const checkIfMdFile = fileName => {
  let fileExt = fileName.split(".").pop();
  return fileExt === "md";
}

const checkFile = path => {
  return fs.statSync(path).isFile()
}

const getFolderContents = (folderName, folderPath) => {
  let folder = new Folder(folderName, folderPath);
  fs.readdirSync(folderPath).forEach(con => {
    if (checkFile(path.resolve(folder.path, con))) {
      if (checkIfMdFile(con)) {
        folder.addContent("file", new Page({
          fileName: con,
          filePath: path.resolve(folder.path, con),
          content: fs.readFileSync(path.resolve(folder.path, con))
        }));
      }
    } else {
      getFolderContents(con, path.resolve(folder.path, con));
    }
  })

  return folder;
}

const reader = ({ defaultsrcPath, defaultStaticPath }) => {
  let srcPath = defaultsrcPath || 'pages';
  let staticPath = defaultStaticPath || 'static';

  let srcFolderPath = path.resolve(process.cwd(), srcPath);
  let staticFolderPath = path.resolve(process.cwd(), staticPath);
  
  const src = getFolderContents('src', srcFolderPath);
  const static = getFolderContents('static', staticFolderPath);

  return { src, static };
}

module.exports = {
  Page,
  reader
};

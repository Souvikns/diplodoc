const {
    Folder,
    MarkdownFile,
    StaticFile
} = require('./service');
const fs = require('fs');
const path = require('path');

const checkIfMdFile = fileName => {
  let fileExt = fileName.split(".").pop();
  return fileExt === "md";
}

const checkFile = path => {
  return fs.statSync(path).isFile()
}

exports.getPagesFolder = (folderName, folderPath) => {
    let folder = new Folder(folderName, folderPath);
    fs.readdirSync(folderPath).forEach(con => {
        if (checkFile(path.resolve(folder.path, con))) {
            if (checkIfMdFile(con)) {
              folder.addContent("file", new MarkdownFile({
                fileName: con,
                dirPath: folder.path,
                content: fs.readFileSync(path.resolve(folder.path, con))
              }));
            }
          } else {
            getFolderContents(con, path.resolve(folder.path, con));
          }
    })

    return folder;
}

exports.getStaticFolder = (folderName, folderPath) => {
    let folder = new Folder(folderName, folderPath);
    fs.readdirSync(folderPath).forEach(con => {
        if (checkFile(path.resolve(folder.path, con))) {
            if (checkIfMdFile(con)) {
              folder.addContent("file", new StaticFile({
                fileName: con,
                dirPath: folder.path,
                content: fs.readFileSync(path.resolve(folder.path, con))
              }));
            }
          } else {
            getFolderContents(con, path.resolve(folder.path, con));
          }
    })

    return folder; 
}
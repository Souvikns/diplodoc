const {getPagesFolder,getStaticFolder} = require('./util');
const path = require('path');


const reader = (defaultPagesDir,defaultStaticDir) => {
    let pagesPath = defaultPagesDir || "pages";
    let staticPath = defaultStaticDir || "static";

    let pagesFolderPath = path.resolve(process.cwd(), pagesPath);
    let staticFolderPath = path.resolve(process.cwd(), staticPath);

    let pages = getPagesFolder(pagesPath, pagesFolderPath);
    let static = getStaticFolder(staticPath, staticFolderPath);

    return {pages, static}
}


module.exports = {
    reader
}
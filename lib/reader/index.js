const { getPagesFolder, getStaticFolder } = require("./util");
const path = require("path");

const reader = (defaultPagesDir = "pages", defaultStaticDir = "static") => {
  let pagesFolderPath = path.resolve(process.cwd(), defaultPagesDir);
  let staticFolderPath = path.resolve(process.cwd(), defaultStaticDir);

  let pages = getPagesFolder(defaultPagesDir, pagesFolderPath);
  let static = getStaticFolder(defaultStaticDir, staticFolderPath);

  return { pages, static };
};

module.exports = {
  reader,
};

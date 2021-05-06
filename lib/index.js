const Reader = require("./reader");
const fs = require("fs");
const path = require("path");

const build = async (dir) => {
  try {
    let mkFiles = await Reader(dir).mdFiles();
    fs.mkdirSync(path.resolve(dir, "dist"));
    mkFiles.forEach((file) => {
      fs.writeFileSync(
        path.resolve(dir, "dist", file.fileName + ".html"),
        file.getHTML()
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const dev = async () => {};

const create = async () => {};

module.exports = {
  build,
  dev,
  create,
};

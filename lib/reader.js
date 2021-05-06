const recursiveReadDir = require("recursive-readdir");
const path = require("path");
const _ = require("lodash");
const { MarkdownFile } = require("./models");
const fs = require("fs");

const Reader = (dir) => {
  return {
    mdFiles: async () => {
      try {
        if (!fs.existsSync(dir)) throw new Error("Directory does not exist");
        let files = await recursiveReadDir(dir);
        let mkFiles = _.filter(files, (file) =>
          /\.md$/.test(path.basename(file))
        );
        return mkFiles.map((file) => new MarkdownFile(file));
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    staticFiles: async () => {
      let files = await recursiveReadDir(dir);
      return _.filter(
        files,
        (file) =>
          /\.png$/.test(path.basename(file)) ||
          /\.jpg$/.test(path.basename(file)) ||
          /\.svg$/.test(path.basename(file))
      );
    },
  };
};

module.exports = Reader;

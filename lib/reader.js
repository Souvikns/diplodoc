const recursiveReadDir = require("recursive-readdir");
const path = require("path");
const _ = require("lodash");

const Reader = (dir) => {
  return {
    mdFiles: async () => {
      try {
        let files = await recursiveReadDir(dir);

        return _.filter(files, (file) => /\.md$/.test(path.basename(file)));
      } catch (error) {
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

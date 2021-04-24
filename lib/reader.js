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
  };
};

module.exports = Reader;

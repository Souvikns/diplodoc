const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
module.exports = {
  getCreateQuestions: () => {
    return inquirer.prompt([
      {
        name: "license",
        message: "Choose a license",
        type: "list",
        choices: ["afl-3.0", "apache-2.0", "gpl", "mit", "isc"],
      },
      {
        name: "pkgManager",
        message: "Choose a Package Manager",
        type: "list",
        choices: ["npm", "yarn"],
      },
    ]);
  },
  /**
   *
   * @param {string} appDir - path of the working directory
   * @param {string} fileName - name of the config file
   * @returns {object} config object
   */
  LoadConfigFile: (appDir, fileName) => {
    let filePath;

    if (_.isUndefined(fileName)) {
      filePath = path.resolve(appDir, "diplodoc.config.js");
    } else {
      filePath = path.resolve(appDir, fileName);
    }

    let config = require(filePath);

    if (!_.isObject(config))
      throw new Error("Something wrong with the config File");

    return config;
  },
};

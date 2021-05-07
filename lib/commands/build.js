const Reader = require("../reader");
const fs = require("fs");
const path = require("path");
const { template } = require("../template");

/**
 *
 * @param {string} htmlString
 * @returns {string}
 */
const loadHtml = (htmlString) => {
  let templateString = template();
  return templateString.replace(/\<\%.+\%\>/g, htmlString);
};

module.exports = () => {
  // TODO: get the config
  // TODO: read all the files
};

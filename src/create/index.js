const path = require("path");
const fs = require("fs");

const BASE_PATH = process.cwd();

const generateProject = ({ projectName }) => {
    fs.mkdirSync(path.resolve(BASE_PATH, projectName));
    fs.mkdirSync(path.resolve(BASE_PATH, projectName, "pages"));
    fs.mkdirSync(path.resolve(BASE_PATH, projectName, "static"));
};


module.exports = {
    generateProject
}
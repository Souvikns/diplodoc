const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
module.exports = {
    getCreateQuestions: () => {
        return inquirer.prompt([
            {
                name: 'license',
                message: "Choose a license",
                type: "list",
                choices: [
                    "afl-3.0",
                    "apache-2.0",
                    "gpl",
                    "mit",
                    "isc"
                ]
            },
            {
                name: 'pkgManager',
                message: "Choose a Package Manager",
                type: "list",
                choices: [
                    "npm",
                    "yarn"
                ]
            }
        ]);
    },

    LoadConfigFile: async (appDir, fileName) => {
        let filePath;
        try {
            if (typeof fileName === "undefined")
                filePath = path.resolve(appDir, 'diplodoc.config.js');
            else
                filePath = path.resolve(appDir, fileName);

            let module = await require(filePath);
            if (typeof module === "object") {
                return module;
            } else {
                throw new Error("Something wrong with the config file");
            }
        } catch (error) {
            throw new Error("File not found");
        }
    }
}
const inquirer = require('inquirer');

exports.getCreateQuestions = (name) => {
    inquirer.prompt([
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
    ]).then(answers => {
        answers.name = name;
        return answers;
    })
}
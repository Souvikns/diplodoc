const inquirer = require('inquirer');

exports.getCreateQuestions = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter the name of the project",
            type: "input"
        },
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
        }
    ]).then(answers => {
        return answers;
    })
}
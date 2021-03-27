#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const package = require('../package.json');
const { reader } = require('../lib/read');
const {DiplodocApp} = require('../lib/create')
const util = require('./util');
const inquirer = require('inquirer');

const program = new Command();
program
    .name("diplodoc")
    .addHelpCommand(false)
    .version(package.version);

program
    .command("create <name>")
    .description("Create project")
    .action((name) => {
        console.log(chalk.blueBright(`created folder ${name}`));
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
                message: "Choose a package manager",
                type: "list",
                choices: [
                    "npm",
                    "yarn"
                ]
            }
        ]).then(answers => {
            let app = new DiplodocApp(process.cwd(), answers);
        })
    })

program
    .command("build")
    .action(() => {
        console.log(reader());
    })

program.command("dev")
    .action(() => {

    })

program.on('command:*', (command) => {
    console.error(chalk.redBright(`error: invalid command ${command}`));
    program.help();
})

program.parse(process.argv);
#!/usr/bin/env node

/**
 * diplodoc <action/verb> <resource>
 */
const { Command, option } = require('commander');
const chalk = require('chalk');
const package = require('../package.json');
const util = require('./util');
const { build, createApp, dev } = require('../lib/commands');
const inquirer = require('inquirer');

const program = new Command();
program
    .name("diplodoc")
    .addHelpCommand(false)
    .version(package.version);

program
    .command("create")
    .description("Create project")
    .option('-t, --template <templateName>', "add template configuration")
    .action(async (options) => {
        if(options === {}){
            
        }

        try {
            let input = await inquirer.prompt([
                {
                    name: "name",
                    message: "Name of the project?"
                }
            ])

            console.log(input);
        } catch (error) {
            console.log(error);
        }
    })

program
    .command("build")
    .option('-c, --config <configPath>', "relative path of the config file")
    .description("create build")
    .action(() => {

    })

program.command("dev")
    .description("run development server")
    .option('-c, --config <configPath>', "relative path of the config file")
    .action(() => {

    })

program.on('command:*', (command) => {
    console.error(chalk.redBright(`error: invalid command ${command}`));
    program.help();
})

program.parse(process.argv);
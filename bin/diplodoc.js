#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const package = require('../package.json');

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
    })

program
    .command("build")
    .action(() => {

    })

program.on('command:*', (command) => {
    console.error(chalk.redBright(`error: invalid command ${command}` ));
    program.help();
})

program.parse(process.argv);
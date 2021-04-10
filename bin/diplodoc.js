#!/usr/bin/env node

/**
 * diplodoc <action/verb> <resource>
 */
const { Command } = require('commander');
const chalk = require('chalk');
const package = require('../package.json');
const util = require('./util');
const { build, createApp, dev } = require('../lib/commands')

const program = new Command();
program
    .name("diplodoc")
    .addHelpCommand(false)
    .version(package.version);

program
    .command("create <name>")
    .description("Create project")
    .option('-t, --template <templateName>', "add template configuration")
    .action((name, options) => {
        console.log(name, options);
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
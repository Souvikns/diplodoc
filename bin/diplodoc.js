#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const {generateProject} = require('../lib/create');

const program = new Command();

program
    .command("create <name>")
    .action((name) => {
        generateProject({projectName: name});
        console.log(chalk.redBright(`cd ${name}`));
    })

program
    .command("build")
    .action(() => {

    })

program.parse(process.argv);
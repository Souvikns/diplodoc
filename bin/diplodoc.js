#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');

const program = new Command();

program
    .command("create <name>")
    .action((name) => {
        console.log(`cd ${chalk.bgRed(name)}`);
    })


program.parse(process.argv);
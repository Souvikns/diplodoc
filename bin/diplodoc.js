#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');

const program = new Command();

program
    .command("create <name>")
    .action((name) => {
    })

program
    .command("build")
    .action(() => {

    })

program.parse(process.argv);
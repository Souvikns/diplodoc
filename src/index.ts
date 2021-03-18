import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .command('create <name>')
    .action((name) => {
        console.log("cd",chalk.blue(`${name}`));
    })


program.parse(process.argv);
#!/usr/bin/env node
import { Command } from 'commander';
import init from './commands/init';
import add from './commands/add';

const program = new Command();

program
  .name('doom')
  .description('CLI for Doom UI')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize Doom UI in your project')
  .action(init);

program
  .command('add')
  .description('Add a Doom UI component to your project')
  .argument('<component>', 'component name to add')
  .action(add);

program.parse(process.argv);

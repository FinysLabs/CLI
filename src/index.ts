#!/usr/bin/env node
import { Command } from "commander";
import initCommand from "./commands/init";
import createCommand from "./commands/create";
import runCommand from "./commands/run";

const program = new Command("finys")
  .description("FinysLabs CLI")
  .version("0.1.0");

program.addCommand(initCommand);
program.addCommand(createCommand);
program.addCommand(runCommand);

program.parse(process.argv);

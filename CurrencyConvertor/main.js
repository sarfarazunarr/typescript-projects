#!/usr/bin/env node
import inquirer from "inquirer";
import getCode from "./modes/currencyCode.js";
import convert from "./modes/currencyConvert.js";
import chalk from "chalk";
//Creating Currency Converter
console.log(chalk.bgGreen.white('\t\t\tWelcome to Currency Converter!'));
let run = true; //Variable for running while loop
while (run) {
    let menu = await inquirer.prompt([
        {
            name: 'item',
            type: "list",
            choices: [
                "Get Currency Code",
                "Convert Currency",
                "Exit"
            ],
            message: "Select an option: "
        }
    ]);
    switch (menu.item) {
        case "Get Currency Code":
            await getCode();
            break;
        case "Convert Currency":
            await convert();
            break;
        case "Exit":
            run = false;
            break;
    }
}

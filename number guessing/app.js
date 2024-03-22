#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import guessNumber from './guessNumber.js'; //module for handling number checking and generating
//Create Number guessing game
console.log(chalk.yellow.bold(`\n\tWelcome to "Guess The Number" Game! \t\t`));
console.log(chalk.blue("\tYou have 10 attempts!"));
console.log(chalk.yellow(`-`.repeat(50)));
let run = true;
//Running loop to allow user to select ranges multiple time
while (run) {
    let difficulty = await inquirer.prompt([
        {
            //List to select multiple ranges
            name: "range",
            type: "list",
            choices: [
                "0 - 100",
                "0 - 500",
                "0 - 1000",
                "Custom",
            ],
            message: "Select Number guessing range!"
        }
    ]);
    //Iterating to choices to run function based on userInput
    switch (difficulty.range) {
        case '0 - 100':
            await guessNumber(100);
            break;
        case '0 - 500':
            await guessNumber(500);
            break;
        case '0 - 1000':
            await guessNumber(1000);
            break;
        case 'Custom':
            //Allow user to add custom range
            let custom = await inquirer.prompt([{ name: "range", type: "number", message: "Enter last number of your range e.g, 3500: " }]);
            await guessNumber(custom.range);
            break;
    }
    //last message
    console.log(chalk.green('Thanks for playing number guessing game!'));
    console.log(chalk.green('Project By: Sarfaraz Unar'));
    //Asking wether user wants to play again!
    let ask = await inquirer.prompt([{ name: 'run', type: "confirm", message: "Do you want to play again!" }]);
    if (!ask.run)
        run = false;
}

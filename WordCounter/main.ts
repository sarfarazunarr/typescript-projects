#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk'

/*
    Create Word Counter that
    * Counts number of words
    * Counts number of characters
    * Reading Time (optional)
*/
async function main() {
    console.log(chalk.yellow('\n\t\t\tWelcome to Word Counter!\n'));

    while (true) {

        //Getting paragraph with the help of inquirer
        let { paragraph } = await inquirer.prompt([{
            name: 'paragraph',
            type: 'string',
            message: "Enter paragraph to calculate number of words:"
        }]);

        let words = paragraph.split(' ').length; //Getting words by spliting sentence with spaces
        let chars = paragraph.replace(/\s/g, '').length; //Getting Characters except spaces
        let { minutes, seconds } = readTime(words) //Calling Function to get specified result

        console.log('\n', chalk.yellow(("-").repeat(50)), '\n'); //Separator

        //Results
        console.log(chalk.cyan('Results: \n'))
        console.log('Number of Words: ', chalk.green(words))
        console.log('Number of Characters: ', chalk.green(chars))
        console.log(`Estimated Reading Time: ${chalk.green(minutes)} Minutes ${chalk.green(seconds)} seconds`)

        let { useAgain } = await inquirer.prompt([{ name: 'useAgain', type: 'confirm', message: "Do you wants to use again?" }])

        if (!useAgain) break;
    }
    console.log(chalk.green('Thanks For Using Word Counter!'))

    function readTime(words: number) {
        let wordsPerMin = 200; //Average number of Words a adult can read in a minute

        let minutes = Math.floor(words / wordsPerMin);
        let seconds = Math.round((words / wordsPerMin - minutes) * 60)
        return { minutes, seconds };
    }
}
main();
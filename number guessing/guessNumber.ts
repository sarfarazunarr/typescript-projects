import inquirer from "inquirer";
import chalk from "chalk";

//Function to handle main part of game
//It will generate random number and compare with userInput

async function guessNumber(range: number) {

    let attempts:number = 0; //Attempts to count
    let randomNumber:number = Math.floor(Math.random() * range) + 1; //Random number from 0 to specified range

    while (true) {
        let guess = await inquirer.prompt([
            //Getting input from user and telling them attempt number
            {
                name: "number",
                type: "number",
                message: `${attempts + 1}: Enter number between (0 - ${range}):  `
            }
        ]);
        attempts++; //Incrementing Attempt

        if (attempts !== 10) { //Checking wether attemps is not equal to 10
            if (guess.number === randomNumber) {
                //Success message when user guessed the right number

                console.log(chalk.green(`Congrats! You guessed the right number ${chalk.blue(guess.number)} in ${chalk.blue(attempts)} attemps.`));
                break; //Breaking the loop
            }

            else if (guess.number < randomNumber) {
                //Message when guessed number is lower then randomNumber
                console.log(chalk.red(`Ohh! Your guessed number ${guess.number} is low!`));
                continue;
            }
            else if (guess.number > range) {
                //Message when guessed number is out of specified range

                console.log(chalk.red(`Ohh! Your number ${guess.number} is out of range!`));
                continue;
            }
            else if (guess.number > randomNumber) {
                //Message when guessed number is higher then randomNumber

                console.log(chalk.red(`Ohh! Your guessed number ${guess.number} is high!`));
                continue;
            }
            else {
                console.log(chalk.red("Invalid Number"));
                continue;
            }
        }
        else{
            //Message when user failed to input right number in 10 attempts
            console.log(chalk.red(`Ohh! You Failed. The correct number is ${chalk.yellow(randomNumber)} your ${chalk.yellow(attempts)} attemps completed! Try Again`));
            break;
        }
        
    }
}
export default guessNumber; //Exporting function to app.ts

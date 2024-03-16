import chalk from "chalk";
import inquirer from "inquirer";
import countries from "../countries.js";

//Getting country code 
async function getCode() {
    console.log(chalk.green('Type your currency name [e.g, Pakistani Rupee]: '));

    //Getting Currency Name
    let { name } = await inquirer.prompt([
        {
            name: 'name',
            type: "string",
            message: "Enter Currency Name: "
        }
    ]);
    //Finding Currency against the countries array
    let currencyData = countries.find(currency => currency[1] === name);

    if (currencyData) {
        //Printing data
        console.log(`Currency Code: ${chalk.yellow(currencyData[0])}`);
        console.log(`Currency Name: ${chalk.yellow(currencyData[1])}`);
    } else {
        console.log(chalk.red('Currency not found.'));
    }
}

export default getCode;

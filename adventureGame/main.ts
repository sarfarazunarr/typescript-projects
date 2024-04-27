import inquirer from "inquirer";
import chalk from 'chalk';

async function main() {
    console.log(chalk.green("Welcome to Adventurous Game!\n\n"));
    let {mode} = await inquirer.prompt([
        {
            name: "mode",
            type: "list",
            choices: ["Dark Night in Karachi", "Changa Manga Jungle", "Kacha of Kashmor"],
            message: "Select a mode to continue >>"
        }
    ]);
    switch (mode) {
        case "Dark Night in Karachi":
            console.log(chalk.yellow("Night is dangerous!"));
            break;
        case "Changa Manga Jungle":
            console.log(chalk.yellow("You are in Jungle!"));
            break;
        case "Kacha of Kashmor":
            console.log(chalk.yellow("Sanaullah Shar is near!"));
            break;
    }
}
main()
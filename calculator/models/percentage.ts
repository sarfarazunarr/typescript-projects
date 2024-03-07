import inquirer from "inquirer";
import chalk from "chalk";

//main functino for percentage
async function percentage() {
    let run: boolean = true;

    //Function to convert percentage to value
    async function findValue() {
        let values = await inquirer.prompt([{
            name: "mainValue",
            type: "number",
            message: "Enter Main Value: "
        },
        {
            name: "percentage",
            type: "number",
            message: "Enter percentage: "
        }]);
        console.log("Answer: " + chalk.bold.green((values.mainValue / 100) * values.percentage));
    }

    //Function to convert value to percentage
    async function findPercentage() {
        let values = await inquirer.prompt([{
            name: "mainValue",
            type: "number",
            message: "Enter Main Value: "
        },
        {
            name: "secondValue",
            type: "number",
            message: "Enter second Value: "
        },]);
        console.log("Answer: " + chalk.bold.green((values.secondValue / values.mainValue) * 100+ "%"));
    }

    while (run) {

        //Getting Values from user
        let values = await inquirer.prompt([{
            name: "type",
            type: "list",
            message: "Select Option:",
            choices: [
                "Percentage to Value",
                "Value to Percentage"
            ]
        }
        ]);
        
        if (values.type === "Percentage to Value") {
            await findValue();
        }
        else if (values.type === "Value to Percentage") {
            await findPercentage();
        }

        let ask = await inquirer.prompt([{
            name: "usage",
            type: "confirm",
            message: "Do you wants to continue : "
        }]);
        if (!ask.usage) {
            run = false;
            break;
        }
    };
    console.log(chalk.bold.green("Thanks for using percentage calculator!"))
}

export default percentage;
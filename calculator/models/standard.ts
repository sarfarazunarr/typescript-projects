import inquirer from "inquirer";
import chalk from "chalk";
import result from "./help.js";

//main function for calculation
async function standard() {
    let run: boolean = true;
    while (run) {

        //Getting values from user to perform calculation
        let values = await inquirer.prompt([{
            name: "value1",
            type: "number",
            message: "Enter First Value: "
        },
        {
            name: "value2",
            type: "number",
            message: "Enter Second Value: "
        },
        {
            name: "operator",
            type: "string",
            message: "(type -help to see operators) \n Enter operator: "
        },
        ]);

        //Calculation based on operator input
        switch (values.operator) {
            case "+":
                console.log(`${values.value1} + ${values.value2} = ${chalk.bold.green(values.value1 + values.value2)}`);
                break;
            case "-":
                console.log(`${values.value1} - ${values.value2} = ${chalk.bold.green(values.value1 - values.value2)}`);
                break;
            case "x":
                console.log(`${values.value1} x ${values.value2} = ${chalk.bold.green(values.value1 * values.value2)}`);
                break;
            case "*":
                console.log(`${values.value1} x ${values.value2} = ${chalk.bold.green(values.value1 * values.value2)}`);
                break;
            case "/":
                console.log(`${values.value1} / ${values.value2} = ${chalk.bold.green(values.value1 / values.value2)}`);
                break;
            case '??':
                console.log(`${values.value1} + ${values.value2} = ${chalk.bold.green(values.value1 + values.value2)}\n`);
                console.log(`${values.value1} - ${values.value2} = ${chalk.bold.green(values.value1 - values.value2)}\n`);
                console.log(`${values.value1} x ${values.value2} = ${chalk.bold.green(values.value1 * values.value2)}\n`);
                console.log(`${values.value1} / ${values.value2} = ${chalk.bold.green(values.value1 / values.value2)}\n`);
                break;
            case '-help':
                console.log(result)
                break;
            default:
                console.log(chalk.red("No value defined"))
                break;
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
    console.log(chalk.bold.green("Thanks for using standard calculator!"))
}

export default standard;
import inquirer from "inquirer";
import standard from "./models/standard.js";
import percentage from "./models/percentage.js";
import compareDate from "./models/dateCal.js";

async function main(){
    const answer = await inquirer.prompt([
        {
            name: "calculator",
            type: "list",
            message: "Which Calculator do you wants to use:",
            choices: [
                "Percentage",
                "Standard",
                "Date difference",
            ],
        },
    ]);

    switch(answer.calculator){
        case "Standard":
            standard();
            break;
        case "Percentage":
            percentage();
            break;
        case "Date difference":
            compareDate();
            break;
        default:
            console.log("Thanks")
    }
}
main()

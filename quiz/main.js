#! /usr/bin/env node
import quiz from "./quiz.js";
import tsquestions from "./questions/tsq.js";
import chalk from "chalk";
import inquirer from "inquirer";
import jsquestions from "./questions/jsq.js";
import cQuestions from "./questions/cq.js";
import pythonQuestions from "./questions/pyq.js";
import javaQuestions from "./questions/javaq.js";
async function main() {
    console.log(chalk.green('\n Welcome to Faraz\'s Quizes!') + '\n');
    const quiztype = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "Which quiz do you want to play?",
            choices: ["TypeScript", "JavaScript", "C", "Python", "Java"],
        }
    ]);
    switch (quiztype.option) {
        case "TypeScript":
            await quiz('Welcome to TypeScript Quiz', tsquestions);
            break;
        case "JavaScript":
            await quiz('Welcome to JavaScript Quiz', jsquestions);
            break;
        case "C":
            await quiz('Welcome to C Quiz', cQuestions);
            break;
        case "Python":
            await quiz('Welcome to Python Quiz', pythonQuestions);
            break;
        case "Java":
            await quiz('Welcome to Java Quiz', javaQuestions);
            break;
        default:
            console.log(chalk.red("Invalid Selection"));
    }
    console.log(chalk.green('\n Thank you for playing!') + '\n');
}
main();

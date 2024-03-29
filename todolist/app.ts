#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import createTask from "./task/create.js";
import readTasks from "./task/view.js";
import updateStatus from "./task/update.js";
import deleteTask from "./task/delete.js";

console.log(chalk.yellow("Welcome to Task Manager!"));
let run:boolean = true;
while (run) {
    let menu = await inquirer.prompt([
        {
            name: 'item',
            type: "list",
            choices: [
                "Create Task",
                "View Task",
                "Update Status",
                "Delete Task",
                "Exit"
            ],
            message: "Which action do you wants perform: "
        }
    ])
    switch (menu.item) {
        case 'Create Task':
            await createTask();
            break;
        case 'View Task':
            console.table(readTasks());
            break;
        case 'Update Status':
            await updateStatus();
            break;
        case 'Delete Task':
            await deleteTask();
            break;
        case 'Exit':
            run= false;
            console.log(chalk.green('Thanks for using task manager!'))
            break;
    }
    
}
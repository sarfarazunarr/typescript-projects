import * as fs from "fs";
import inquirer from "inquirer";
import readTasks from "./view.js";

async function updateStatus() {
    const tasks = readTasks() || [];
    let task = await inquirer.prompt([
        {
            name: "name",
            type: "list",
            choices: tasks.map((item: { title: string }) => item.title),
            message: "Select task to update: "
        },
        {
            name: "status",
            type: "list",
            choices: [
                "Pending",
                "In-progress",
                "Completed"
            ],
            message: "Select task status mode: "
        }
    ]);

    const taskIndex = tasks.findIndex((taskdata: { title: string }) => taskdata.title === task.name);

    if (taskIndex !== -1) {
        if (task.choices == "Completed") {
            tasks[taskIndex].status = task.status;
            tasks[taskIndex].completed = true;
        }
        tasks[taskIndex].status = task.status;
        console.log('Task updated successfully!');
    } else {
        console.log('Task not found!');
    }
}

export default updateStatus;

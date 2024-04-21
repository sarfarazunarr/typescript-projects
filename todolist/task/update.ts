import * as fs from "fs";
import inquirer from "inquirer";
import readTasks from "./view.js";

async function updateStatus() {
    const tasks = await readTasks();
    let task = await inquirer.prompt([
        {
            name: "name",
            type: "list",
            choices: tasks.map((item: {title:string}) => item.title),
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
    
    const taskIndex = tasks.findIndex((taskdata:{title:string}) => taskdata.title === task.name);
    console.log(taskIndex);
    if (taskIndex !== -1) {
        tasks[taskIndex].status = task.status;
        try {
            fs.writeFileSync('./taskData.json', JSON.stringify(tasks, null, 2));
            console.log('Task updated successfully!');
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    } else {
        console.log('Task not found!');
    }
}

export default updateStatus;

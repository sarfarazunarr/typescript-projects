import * as fs from "fs";
import inquirer from "inquirer";
import readTasks from "./view.js";
async function deleteTask() {
    const tasks = await readTasks();
    let task = await inquirer.prompt([
        {
            name: "name",
            type: "list",
            choices: tasks.map((item) => item.title),
            message: "Select task to delete: "
        }
    ]);
    const taskIndex = tasks.findIndex((taskdata) => taskdata.title === task.name);
    if (taskIndex !== -1) {
        tasks.splice(tasks[taskIndex], 1);
        try {
            fs.writeFileSync('./task/taskData.json', JSON.stringify(tasks, null, 2));
            console.log('Task deleted successfully!');
        }
        catch (error) {
            console.error('Error deleting to file:', error);
        }
    }
    else {
        console.log('Task not found!');
    }
}
export default deleteTask;

import inquirer from "inquirer";
import readTasks from "./view.js";
async function deleteTask() {
    const tasks = readTasks() || [];
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
        tasks.splice(taskIndex, 1);
        console.log('Task deleted successfully!');
    }
    else {
        console.log('Task not found!');
    }
}
export default deleteTask;

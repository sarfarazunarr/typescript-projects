import readTasks from './view.js';
import inquirer from 'inquirer';
import chalk from 'chalk';

async function createTask(data?: { title: string, description: string, status: string, completed: boolean }) {
    try {
        if (data) {
            const taskContent = readTasks() || [];
            taskContent.push(data);
            return ('done');
        }
        let taskInfo = await inquirer.prompt([
            {
                name: "title",
                type: "string",
                message: "Enter task title: "
            },
            {
                name: "description",
                type: "string",
                message: "Enter task description: "
            }
        ]);

        let newTask = {
            title: taskInfo.title,
            description: taskInfo.description,
            status: 'Pending',
        };

        const taskContent = readTasks() || [];
        taskContent.push({title: newTask.title, description: newTask.description, status: newTask.status, completed: false});
        console.log(chalk.green('Task has been saved!'))
    } catch (error) {
        console.log(chalk.red('Failed to create Task!'))
        console.log(error);
    }
}

export default createTask;

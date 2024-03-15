import * as fs from 'fs';
import readTasks from './view.js';
import inquirer from 'inquirer';
import chalk from 'chalk';

async function createTask(data?: {}) {
    try {
        if (data) {
            const taskContent = readTasks();
            taskContent.push(data);

            fs.writeFileSync('./task/taskData.json', JSON.stringify(taskContent, null, 2));
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
            date: new Date(Date.now()),
        };

        const taskContent = readTasks();
        taskContent.push(newTask);

        fs.writeFileSync('./task/taskData.json', JSON.stringify(taskContent, null, 2));
        console.log(chalk.green('Task has been saved!'))
    } catch (error) {
        console.log(chalk.red('Failed to create Task!'))
        console.log(error);
    }
}

export default createTask;

import chalk from 'chalk';
import * as fs from 'fs';
function readTasks() {
    const taskContent = fs.readFileSync('./task/taskData.json', 'utf-8');
    try {
        const taskData = JSON.parse(taskContent);
        return taskData;
    }
    catch (error) {
        if (error.message === 'Unexpected end of JSON input') {
            fs.writeFileSync('./task/taskData.json', `[]`);
            console.log(chalk.red('Try Again'));
            readTasks();
        }
        console.log(chalk.red(`Error parsing JSON file: ${error.message}`));
    }
}
export default readTasks;

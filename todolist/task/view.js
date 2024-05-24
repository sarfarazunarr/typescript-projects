import chalk from 'chalk';
import data from '../taskData.js';
function readTasks() {
    try {
        if (data.length == 0) {
            console.log(chalk.red('No Task Found!'));
            return [];
        }
        return data;
    }
    catch (error) {
        console.log(chalk.red(`Got Error: ${error.message}`));
    }
}
export default readTasks;

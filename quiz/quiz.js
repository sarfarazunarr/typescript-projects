import inquirer from 'inquirer';
import chalk from 'chalk';
async function quiz(title, questiondata) {
    let score = 0;
    let result = [];
    let points = 100 / questiondata.length;
    console.log(chalk.blueBright(title));
    console.log(chalk.yellow(`This quiz contains ${questiondata.length} questions. And each question contains ${points} points.`));
    console.log(chalk.greenBright('-').repeat(50));
    for (const data of questiondata) {
        let { answer } = await inquirer.prompt([
            {
                name: "answer",
                type: "list",
                choices: data.choices.map((mcq) => {
                    return mcq;
                }),
                message: `${data.id} ${data.question}`
            }
        ]);
        if (answer == data.correctAnswer) {
            score += points;
            result.push({
                Qno: data.id,
                correctAnswer: (data.correctAnswer).slice(0, 20) + "...",
                yourAnswer: answer,
                correct: true
            });
        }
        else {
            result.push({
                Qno: data.id,
                correctAnswer: (data.correctAnswer).slice(0, 20) + "...",
                yourAnswer: answer,
                correct: false
            });
        }
    }
    ;
    console.log('\n');
    console.log(chalk.greenBright('-').repeat(50));
    console.log(chalk.green(`Your score is ${score}/100`));
    console.table(result);
}
export default quiz;

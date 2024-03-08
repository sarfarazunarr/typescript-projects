import chalk from "chalk"
import inquirer from "inquirer"

//Function for calculation
const compareDate = async () => {
    let run: boolean = true;
    while (run) {
        console.log(chalk.yellow("Enter date like [YYYY/MM/DD] \n"));

        //getting dates for calculation
        let dates = await inquirer.prompt([
            {
                name: "date1",
                type: "string",
                message: "Enter 1st date: "
            },
            {
                name: "date2",
                type: "string",
                message: "Enter 2nd date: "
            }
        ])

        //Conversion 
        let date1: Date = new Date(dates.date1)
        let date2: Date = new Date(dates.date2)

        let years: number = date2.getFullYear() - date1.getFullYear();//Getting Years
        let months: number = date2.getMonth() - date1.getMonth(); //getting months
        let days: number = date2.getDate() - date1.getDate(); //Getting Dates
        
        console.log(chalk.bold.blue(`The difference between dates is${chalk.green(years)} years, ${chalk.green(months)} months, ${chalk.green(days)} days.`))

        let ask = await inquirer.prompt([{
            name: "usage",
            type: "confirm",
            message: "Do you wants to continue : "
        }]);
        if (!ask.usage) {
            run = false;
            break;
        }
    }
}

export default compareDate;

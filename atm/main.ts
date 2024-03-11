import chalk from "chalk";
import inquirer from "inquirer";
import accounts from "./db/accounts.js";
import blocked from "./db/blocked.js";
import Transactionhistory from "./db/history.js";

console.log(chalk.green("Welcome to Faraz ATM!"));

let userid = await inquirer.prompt([
    {
        name: "userid",
        type: "string",
        message: "Enter your userid: "
    }
]);
const userdata = accounts.find((account) => account.userid === userid.userid);

if (userdata) {
    console.log(chalk.yellow(`Assalam u alaikum ${userdata.name}!\n`))
    while (true) {
        if (blocked.includes(userdata.userid)) {
            console.log(chalk.red('Your card is blocked! Please contact your bank!'));
        } else {
            let passwordAttempts: number = 1;
            while (true) {
                if (passwordAttempts === 3) {
                    blocked.push(userdata.userid);
                    console.log(chalk.red(`Your card has been blocked! Please contact the bank for resetting the pin`));
                    break;
                }
                let pin = await inquirer.prompt([
                    {
                        name: "userpin",
                        type: "number",
                        message: "Enter your pin: "
                    }
                ]);

                if (userdata.userpin === pin.userpin) {
                    let amount = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter amount to withdraw: "
                        },
                    ]);

                    if (amount.amount > userdata.cardLimit) {
                        console.log(chalk.red("Card Limit exceeded!"));
                        break;
                    } else if (amount.amount > userdata.amount) {
                        console.log(chalk.red("You do not have enough balance!"));
                        break;
                    } else {
                        // Update the amount in the accounts array
                        let userIndex = accounts.findIndex((account) => account.userid === userid.userid);
                        accounts[userIndex].amount -= amount.amount;

                        console.log(chalk.green(`Please take your cash!`));
                        Transactionhistory.push({ userid: userdata.userid, amountWithdrawn: amount.amount, date: new Date() });
                        console.log(chalk.yellow(`Your remaining balance is ${accounts[userIndex].amount}`));
                        break;
                    }
                } else {
                    passwordAttempts++;
                    console.log(chalk.red('Invalid pin! Please try again'));
                }
            }
        }

        let needHistory = await inquirer.prompt([
            {
                name: "view",
                type: "confirm",
                message: "Do you want to view transaction history? "
            }
        ]);

        if (needHistory.view) {
            let transactionData = Transactionhistory.filter((transaction) => transaction.userid === userdata.userid);
            if (transactionData) {
                console.table(transactionData);
            }
        }

        let restart = await inquirer.prompt([
            {
                name: "useagain",
                type: "confirm",
                message: "Do you want to perform more transactions? "
            }
        ]);
        if(!restart.useagain){
            console.log(chalk.green('Thank you for using this ATM!'));
            break};
    }
} else {
    console.log(chalk.red(`It seems you are not registered with Faraz Bank!`));
}

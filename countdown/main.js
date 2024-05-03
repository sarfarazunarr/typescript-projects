import inquirer from "inquirer";
class CountdownTimer {
    targetDate;
    intervalId;
    constructor(targetDateString) {
        this.targetDate = new Date(targetDateString);
        this.start();
    }
    start() {
        this.intervalId = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = this.targetDate.getTime() - currentDate.getTime();
            if (timeDifference <= 0) {
                clearInterval(this.intervalId);
                console.log("Countdown complete!");
            }
            else {
                const seconds = Math.floor((timeDifference / 1000) % 60);
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining...`);
            }
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
    }
}
const main = async () => {
    console.log("WELCOME TO COUTNDOWN TIMER!");
    const dateset = await inquirer.prompt([
        {
            name: "hours",
            type: "number",
            message: "Enter number of hours: "
        },
        {
            name: "minutes",
            type: "number",
            message: "Enter number of minutes: "
        },
        {
            name: "seconds",
            type: "number",
            message: "Enter number of seconds: "
        }
    ]);
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + dateset.hours);
    targetDate.setMinutes(targetDate.getMinutes() + dateset.minutes);
    targetDate.setSeconds(targetDate.getSeconds() + dateset.seconds);
    const countdown = new CountdownTimer(targetDate.toISOString());
};
main();

import axios from "axios";
import chalk from "chalk";
import inquirer from "inquirer";

async function convert() {
    //Getting data from user for conversion 
    let data = await inquirer.prompt([
        {
            name: "from",
            type: "string",
            message: "Enter Currency code (Convert From):"
        },
        {
            name: "to",
            type: "string",
            message: "Enter Currency code (Convert To):"
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Amount to Convert:"
        }
    ]);

    try {
        console.log(chalk.yellow('Converting Please wait!\n'));
        //Using Api with user data
        let conversionData: { status: number, data: { conversion_rate: number, conversion_result: number } } = await axios.get(`https://v6.exchangerate-api.com/v6/[API_KEY]/pair/${data.from}/${data.to}/${data.amount}`);

        let result: number = conversionData.data.conversion_result; //Conversion result
        if (conversionData.status === 200) { //Checking Status

            //Displaying All Data
            console.log(chalk.yellow('Conversion Details: ')); 
            console.log(`Converted from: ${chalk.yellow(data.from)}`)
            console.log(`Converted to: ${chalk.yellow(data.to)}`)
            console.log(`Amount to convert: ${chalk.yellow(data.amount)}`)
            console.log(`Conversion Rate: ${chalk.yellow(conversionData.data.conversion_rate)}`)
            console.log(`Converted Amount: ${chalk.yellow(result)}`)
            console.log(chalk.green("Done!"))
            console.log(chalk.yellow(("-").repeat(20)))

            //API may not provide appropriate results because of free tier
        }
    } catch (error) {
        console.log("Internet Connection Error")
        console.log("Fetching data from offline...")
    }
}
export default convert;
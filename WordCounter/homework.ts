import inquirer from 'inquirer';

enum Choice {
    Rock,
    Paper,
    Scissors
}

function getComputerChoice(): Choice {
    const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(userChoice: Choice, computerChoice: Choice): string {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    switch (userChoice) {
        case Choice.Rock:
            return computerChoice === Choice.Paper ? "Computer wins!" : "You win!";
        case Choice.Paper:
            return computerChoice === Choice.Scissors ? "Computer wins!" : "You win!";
        case Choice.Scissors:
            return computerChoice === Choice.Rock ? "Computer wins!" : "You win!";
    }
}

async function playGame(): Promise<void> {
    console.log('Welcome to Rock Paper Scissors!');
    const userChoice = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Enter your choice (Rock, Paper, Scissors)',
            choices: [Choice.Rock, Choice.Paper, Choice.Scissors],
        },
    ]);

    const computerChoice = getComputerChoice();

    console.log(`You chose ${Choice[userChoice.choice]}`);
    console.log(`Computer chose ${Choice[computerChoice]}`);

    const winner = getWinner(userChoice.choice, computerChoice);
    console.log(winner);
}

playGame();

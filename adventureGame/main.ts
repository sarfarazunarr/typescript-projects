#! /usr/bin/env node

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class AdventureGame {
    start() {
        console.log("Welcome to the Adventure Game!");
        console.log("You find yourself standing in front of a mysterious cave entrance.");
        console.log("Do you want to enter the cave? (yes/no)");

        rl.question("> ", (answer) => {
            if (answer.toLowerCase() === "yes") {
                this.enterCave();
            } else {
                console.log("You decide not to enter the cave. The adventure ends here.");
                rl.close();
            }
        });
    }

    enterCave() {
        console.log("You cautiously step into the cave and find two paths diverging in front of you.");
        console.log("Do you want to go left or right? (left/right)");

        rl.question("> ", (answer) => {
            if (answer.toLowerCase() === "left") {
                this.leftPath();
            } else if (answer.toLowerCase() === "right") {
                this.rightPath();
            } else {
                console.log("Invalid choice. Please choose 'left' or 'right'.");
                this.enterCave();
            }
        });
    }

    leftPath() {
        console.log("You chose the left path and encounter a friendly troll.");
        console.log("The troll offers you a magical sword. Do you accept? (yes/no)");

        rl.question("> ", (answer) => {
            if (answer.toLowerCase() === "yes") {
                console.log("You accept the magical sword and continue your adventure!");
                this.middlePath();
            } else {
                console.log("You refuse the troll's offer and continue exploring the cave.");
                console.log("Unfortunately, you encounter a dragon and perish in the flames. Game over!");
                rl.close();
            }
        });
    }

    rightPath() {
        console.log("You chose the right path and encounter a fierce dragon!");
        console.log("Do you want to fight the dragon or run away? (fight/run)");

        rl.question("> ", (answer) => {
            if (answer.toLowerCase() === "fight") {
                console.log("You bravely fight the dragon with all your might...");
                console.log("You defeat the dragon and emerge victorious!");
                this.middlePath();
            } else if (answer.toLowerCase() === "run") {
                console.log("You cowardly run away from the dragon...");
                console.log("Unfortunately, you trip and fall into a pit of spikes. Game over!");
                rl.close();
            } else {
                console.log("Invalid choice. Please choose 'fight' or 'run'.");
                this.rightPath();
            }
        });
    }

    middlePath() {
        console.log("You continue deeper into the cave and find yourself in a labyrinth.");
        console.log("There are three doors in front of you: red, blue, and green.");
        console.log("Which door do you choose? (red/blue/green)");

        rl.question("> ", (answer) => {
            if (answer.toLowerCase() === "red") {
                console.log("You enter the red door and find a treasure chest!");
                console.log("Congratulations! You found the treasure and won the game!");
                rl.close();
            } else if (answer.toLowerCase() === "blue") {
                console.log("You enter the blue door and fall into a trap. Game over!");
                rl.close();
            } else if (answer.toLowerCase() === "green") {
                console.log("You enter the green door and encounter a giant spider!");
                console.log("Do you want to fight the spider or try to sneak past it? (fight/sneak)");

                rl.question("> ", (answer) => {
                    if (answer.toLowerCase() === "fight") {
                        console.log("You engage in a fierce battle with the spider...");
                        console.log("You defeat the spider and continue your journey!");
                        this.finalPath();
                    } else if (answer.toLowerCase() === "sneak") {
                        console.log("You attempt to sneak past the spider...");
                        console.log("Unfortunately, the spider catches you and injects its venom. Game over!");
                        rl.close();
                    } else {
                        console.log("Invalid choice. Please choose 'fight' or 'sneak'.");
                        this.middlePath();
                    }
                });
            } else {
                console.log("Invalid choice. Please choose 'red', 'blue', or 'green'.");
                this.middlePath();
            }
        });
    }

    finalPath() {
        console.log("You reach the final part of the cave and see a massive door guarded by a fearsome creature.");
        console.log("This is the final challenge! Do you dare to open the door? (yes/no)");

        rl.question("> ", (answer) => {
            if (answer.toLowerCase() === "yes") {
                console.log("You open the door and confront the creature...");
                console.log("Congratulations! You have overcome all obstacles and emerged victorious!");
                console.log("You win!");

                rl.close();
            } else {
                console.log("You decide not to open the door and leave the cave, wondering what could have been...");
                console.log("Game over!");
                rl.close();
            }
        });
    }
}
const game = new AdventureGame();
game.start();

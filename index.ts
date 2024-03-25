#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess a number from (1-6)",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! you guessed right number");
} else {
  console.log("Oops! you guessed wrong number");
}

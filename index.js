#!/usr/bin/env node
const inquirer = require('inquirer');
console.log("Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n")

const difficultyLevels = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
};

inquirer.prompt([
  {
    name: 'difficulty',
    type: 'rawlist',
    message: 'Enter your choice:',
    choices: [
      { name: 'Easy (10 chances)', value: 1 },
      { name: 'Medium (5 chances)', value: 2 },
      { name: 'Hard (3 chances)', value: 3 },
    ],
  },
  {
    name: 'Enter your guess',
    type: 'number',
    message: (answers) => {console.log(`Great! You have selected the ${difficultyLevels[answers.difficulty]} difficulty level.\nLet's start the game!`)},
  },
  {
    name: 'Enter your guess',
    type: 'number',
    message: (answers) => {
      console.log(answers);
    },
  },
])


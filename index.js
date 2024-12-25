#!/usr/bin/env node
const inquirer = require('inquirer');

console.log("Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n")

inquirer
  .prompt([
    {
      name: 'difficulty',
      type: 'rawlist',
      message: 'Please select the difficulty level:',
      choices: [
        { name: 'Easy (10 chances)', value: 'one' },
        { name: 'Medium (5 chances)', value: 'two' },
        { name: 'Hard (3 chances)', value: 'three' },
      ],
    },
  ])
  .then((answers) => {
    console.info('Answer:', answers.difficulty);
  })
  .catch((err) => {
    console.log(err)
  })

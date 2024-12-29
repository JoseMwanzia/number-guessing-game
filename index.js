#!/usr/bin/env node
const inquirer = require('inquirer');
const { difficulty, guess } = require('./prompts')

console.log("Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n")

async function difficultyPrompt() {
  const difficultyAnswer = await inquirer.prompt(difficulty);
  const level = difficultyAnswer.difficulty.level
  const chances = difficultyAnswer.difficulty.chances
  return {level, chances}
}

async function guessPrompt(chances) {
  const correctAnswer = Math.floor(Math.random() * 100 +1)
  // const correctAnswer = 20
  console.log(correctAnswer);
  let guesAnswer;
  let correctNess;
  let attempts= 0;
  
  while (!correctNess) {
    attempts++
    guesAnswer = await inquirer.prompt(guess);
    correctNess = correctAnswer === parseInt(guesAnswer.guess);

    const gues = () => {
        if (parseInt(guesAnswer.guess) > correctAnswer) {
        return parseInt(guesAnswer.guess)
      }
    }

    if (attempts <= parseInt(chances)) {
      if (correctNess) {
        console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        break;
      } else {
        console.log(`Incorrect! The number is less than ${gues()}.`);
      }
    }

    if (attempts === parseInt(chances)) {
      console.log(`Sorry Youve have ran out of attempts`);
      break;
    }
  } 
}

async function main() {
  const difficultyAnswer = await difficultyPrompt();
  const chances = difficultyAnswer.chances;
  console.log(`Great! You have selected the ${difficultyAnswer.level} difficulty level.\nLet's start the game!`)
  guessPrompt(chances)
}
main()

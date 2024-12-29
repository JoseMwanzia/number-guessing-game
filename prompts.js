const difficulty = [
  {
    name: 'difficulty',
    type: 'rawlist',
    message: 'Please select the difficulty level:',
    choices: [
      { name: 'Easy (10 chances)', value: {level: 'Easy', chances: 10} },
      { name: 'Medium (5 chances)', value: {level: 'Medium', chances: 5} },
      { name: 'Hard (3 chances)', value: {level: 'Hard', chances: 3} },
    ]
  }
]

const guess = [
  {
    name: 'guess',
    type: 'number',
    message: 'Enter your guess:',
  },
]

module.exports = {difficulty, guess}
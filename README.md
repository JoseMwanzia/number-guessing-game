# Number Guessing Game

Welcome to the **Number Guessing Game**! This is a fun and interactive command-line game where you try to guess a randomly generated number within a certain number of attempts. The game includes difficulty levels to make it more challenging and enjoyable. [Project](https://roadmap.sh/projects/number-guessing-game)

## Features

- Choose from different difficulty levels.
- Random number generation between 1 and 100.
- Provides hints to help you guess the number.
- Keeps track of your attempts and notifies you when you win or lose.

## Prerequisites

To run this application, you need:

- [Node.js](https://nodejs.org/) installed on your computer.

## Installation

1. Clone the repository or download the script file.

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

## Usage

1. Run the game using the following command:

   ```bash
   start-game
   ```
2. Follow the prompts to select the difficulty level and start guessing the number!

## How It Works

1. The game starts by welcoming you and asking you to select a difficulty level.
2. Based on the difficulty level, the game sets the number of attempts you have.
3. A random number between 1 and 100 is generated.
4. You enter your guesses, and the game provides hints (e.g., "The number is less than...").
5. The game ends when you guess the correct number or run out of attempts.

## Code Structure

### Main File

- **difficultyPrompt()**: Prompts the user to select a difficulty level and returns the level and chances.
- **guessPrompt(chances)**: Manages the guessing logic, provides hints, and tracks attempts.
- **main()**: Initializes the game, handles prompts, and starts the game loop.

### Prompts

The prompts are defined in a separate file (`prompts.js`) and imported into the main file. 

## Example Gameplay

```bash
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

? Select difficulty level: Easy
Great! You have selected the Easy difficulty level.
Let's start the game!

? Your guess: 50
Incorrect! The number is less than 50.

? Your guess: 25
Incorrect! The number is greater than 25.

? Your guess: 30
Congratulations! You guessed the correct number in 3 attempts.
```

## Customization

- **Difficulty Levels**: You can customize the difficulty levels in the `prompts.js` file.
- **Number Range**: Modify the range of random numbers (`Math.random() * 100 + 1`) in the `guessPrompt` function.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

Enjoy playing the Number Guessing Game and improving your guessing skills!


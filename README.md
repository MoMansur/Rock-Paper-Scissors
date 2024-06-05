# Rock Paper Scissors Game

Welcome to the Rock Paper Scissors Game! This is a classic implementation of the popular hand game, where you can play against the computer. The game continues for 5 rounds, and at the end, the winner is declared. 

## Features

- Play against the computer
- Each round's result is displayed
- Keeps track of scores
- Declares a winner after 5 rounds
- Allows restarting the game

## How to Play

1. Choose one of the options: Rock, Paper, or Scissors by clicking the respective button.
2. The computer will randomly choose its option.
3. The result of each round is displayed, showing if you won, lost, or if it was a tie.
4. The scores are updated after each round.
5. The game ends after 5 rounds, and a popup will display the winner.
6. You can restart the game by clicking the "Restart Game" button in the popup.

## Functionality

- **Human Choice**: The player makes a choice by clicking one of the buttons: Rock, Paper, or Scissors.
- **Computer Choice**: The computer randomly selects Rock, Paper, or Scissors.
- **Game Logic**: Determines the winner of each round based on the classic rules:
  - Rock beats Scissors
  - Scissors beat Paper
  - Paper beats Rock
- **Score Keeping**: Tracks the score for both the player and the computer.
- **Game Over Popup**: Displays a popup when one player reaches 5 points, showing the final result and offering a restart option.

## Code Structure

### HTML

- `index.html`: Contains the structure of the game interface, including the buttons, score displays, and game over popup.

### CSS

- `styles.css`: Styles for the game elements, ensuring a responsive and visually appealing design.

### JavaScript

- `script.js`: Contains all the game logic and functionalities.

### Functions in `script.js`

- **computerChoice()**: Generates and displays the computer's choice.
- **gameCombo(humanChoice, computerChoice)**: Determines the winner of the round and updates the scores.
- **playGame(humanChoice)**: Main function that is called when a player makes a choice. Manages the game flow.
- **showGameOverPopup()**: Displays the game over popup.
- **restartGame()**: Resets the game to its initial state.
- **statusEffect(status)**: Updates the display based on whether the player won, lost, or tied.
- **imagesInserter(humanChoice, round)**: 

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/MoMansur/Rock-Paper-Scissors.git
    ```
2. Open `index.html` in your web browser to start playing.

## Screenshots

![WhatsApp Image 2024-06-05 at 23 46 00_963867b5](https://github.com/MoMansur/Rock-Paper-Scissors/assets/58377731/03640ad5-a927-454f-8b91-1fde14b5ea77)
![WhatsApp Image 2024-06-05 at 23 46 00_b7bfa05c](https://github.com/MoMansur/Rock-Paper-Scissors/assets/58377731/891bda0b-bf2d-45d2-a04f-50d00c11bd00)
![WhatsApp Image 2024-06-05 at 23 46 00_9974519f](https://github.com/MoMansur/Rock-Paper-Scissors/assets/58377731/bf0a2082-97f8-455b-bfa2-9aa86b1817d6)
![image](https://github.com/MoMansur/Rock-Paper-Scissors/assets/58377731/b921d47e-47c9-41c6-b10b-5e3eaefbe307)


## Author

- [Mansur Shehu Modibbo](https://github.com/MoMansur/)




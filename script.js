// DOM Elements
const humanChoiceDisplay = document.getElementById('humanChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const winMessage = document.getElementById('winMessage');
const humanScoreDOM = document.getElementById('humanScore');
const computerScoreDOM = document.getElementById('computerScore');
const choicesArr = document.querySelectorAll('.choice');
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
const gameOverPopup = document.getElementById('gameOverPopup');
const restartGameBtn = document.getElementById('restartGameBtn');
const gameOverStatus = document.getElementById('gameOverStatus')

// Game state variables
let round = 0;
let humanScore = 0;
let computerScore = 0;

let choiceDIvDisplay = humanChoiceDisplay.innerHTML
let ComputerChoiceDisplayOrg = computerChoiceDisplay.innerHTML
// Event listeners for player choices
rockChoice.addEventListener('click', () => playGame('rock'));
paperChoice.addEventListener('click', () => playGame('paper'));
scissorsChoice.addEventListener('click', () => playGame('scissors'));

// Generate computer's choice
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    const chosen = choices[random];

    // Update computer choice display
    computerChoiceDisplay.innerText = chosen;
    if (chosen === 'paper') {
        computerChoiceDisplay.innerHTML = `<img src="./img/paper2.png">`;
    } else if (chosen === 'rock') {
        computerChoiceDisplay.innerHTML = `<img src="./img/rock3.png">`;
    } else if (chosen === 'scissors') {
        computerChoiceDisplay.innerHTML = `<img src="./img/scissors2.png">`;
    }

    return chosen;
}

// Determine the result of a round
function gameCombo(humanChoice, computerChoice) {
    switch (`${humanChoice}-${computerChoice}`) {
        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
            humanScore++;
            round++;
            statusEffect('win');
            break;
        case 'rock-rock':
        case 'paper-paper':
        case 'scissors-scissors':
            statusEffect('tie');
            round++;
            break;
        case 'scissors-rock':
        case 'rock-paper':
        case 'paper-scissors':
            computerScore++;
            round++;
            statusEffect('lose');
            break;
    }
    return [humanScore, computerScore];
}

// Play a round of the game
function playGame(humanChoice) {
    const computerChoiceValue = computerChoice();
    const scores = gameCombo(humanChoice, computerChoiceValue);
    imagesInserter(humanChoice, scores);

    // Check if the game is over (5 rounds)
    if (scores[0] === 5) {
        let status ='win'
        showGameOverPopup(status);
    }else if(scores[1] === 5){
        let status ='lose'
        showGameOverPopup(status);
    }
}

// Show game over pop-up
function showGameOverPopup(status) {
    gameOverPopup.style.display = 'flex';
    
    if(status === 'win' ){
        gameOverStatus.style.color = 'rgb(0, 255, 0)'
        gameOverStatus.textContent = 'You win The Round'
    }else{
        gameOverStatus.style.color = 'red'
        gameOverStatus.textContent = 'You Lose The Round'
    }
}

// Restart the game
function restartGame() {
    gameOverPopup.style.display = 'none';
    resetGame();
}

// Reset game state
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    humanScoreDOM.textContent = '0';
    computerScoreDOM.textContent = '0';
    winMessage.textContent = 'Start';
    humanChoiceDisplay.innerHTML =choiceDIvDisplay;
    computerChoiceDisplay.innerHTML = ComputerChoiceDisplayOrg;
    humanChoiceDisplay.style.backgroundColor = '#1f2937'
    computerChoiceDisplay.style.backgroundColor = '#1f2937'
}

// Add event listener to the restart button
restartGameBtn.addEventListener('click', restartGame);

// Update the display based on the game status
function statusEffect(status) {
    if (status === 'win') {
        winMessage.innerText = 'You win';
        humanChoiceDisplay.style.backgroundColor = 'rgb(0, 255, 0)';
        computerChoiceDisplay.style.backgroundColor = 'red';
    } else if (status === 'tie') {
        winMessage.innerText = 'It\'s a Tie';
        humanChoiceDisplay.style.backgroundColor = 'blue';
        computerChoiceDisplay.style.backgroundColor = 'blue';
    } else if (status === 'lose') {
        winMessage.innerText = 'You Lose';
        humanChoiceDisplay.style.backgroundColor = 'red';
        computerChoiceDisplay.style.backgroundColor = 'rgb(0, 255, 0)';
    }
}

// Insert images and update scores
function imagesInserter(humanChoice, scores) {
    if (humanChoice === 'rock') {
        humanChoiceDisplay.innerHTML = `<img src="./img/rock3.png">`;
    } else if (humanChoice === 'paper') {
        humanChoiceDisplay.innerHTML = `<img src="./img/paper2.png">`;
    } else {
        humanChoiceDisplay.innerHTML = `<img src="./img/scissors2.png">`;
    }
    humanScoreDOM.innerText = scores[0];
    computerScoreDOM.innerText = scores[1];
}

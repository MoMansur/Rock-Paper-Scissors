

const choices = ['rock', 'paper', 'scissors']

function computerChoice(){

    let random = Math.floor(Math.random() * choices.length)

    return choices[random]
  
}


function humanChoice(){
    const userInput = prompt('Insert your choice; rock, paper, scissors')

    return userInput
}

const getComputerChoice = computerChoice()
const getHumanChoice = humanChoice()

const humanScore = 0;
const computerScore = 0;

console.log(`Computer Choice: ${getComputerChoice} `)
console.log(`Human Choice: ${getHumanChoice} `)



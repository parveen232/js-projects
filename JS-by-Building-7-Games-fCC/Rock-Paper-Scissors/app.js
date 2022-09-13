const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const PossibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

for (let choice of PossibleChoices) {
    choice.addEventListener('click', e => {
        userChoice = e.target.id;
        // console.log(userChoice);
        userChoiceDisplay.innerHTML = userChoice;
        // userChoiceDisplay.innerHTML = userChoice;  /give same functionality as above
        generateComputerChoice();
        getResult();
    })
}

function generateComputerChoice() {
    const randNumber = Math.floor(Math.random() * 3) + 1; // we can also use PossibleChoices.length
    // console.log(randNumber);

    if (randNumber === 1) {
        computerChoice = 'rock';
    }
    else if (randNumber === 2) {
        computerChoice = 'scissors';
    }
    else if (randNumber === 3) {
        computerChoice = 'paper';
    }
    // console.log(computerChoice);
    computerChoiceDisplay.innerText = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw!"
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win!"
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost!"
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost!"
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win!"
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win!"
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost!"
    }
    resultDisplay.innerText = result;
}
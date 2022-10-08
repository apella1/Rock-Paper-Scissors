const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');

// initializing 
let userChoice
let computerChoice
let result  

possibleChoices.forEach( (possibleChoice) => {
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    })
})

function generateComputerChoice() { 
    const randomNumber =  Math.floor(Math.random() * possibleChoices.length) 

    if (randomNumber === 1) { 
        computerChoice = 'scissors'
    } else if (randomNumber === 2) { 
        computerChoice = 'rock'
    } else { 
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

// resultDisplay.forEach( (result) => { 
//     switch(result) {
//         case computerChoice === 'scissors' && userChoice === 'rock': 'You won!';
//         break;
//         case computerChoice === 'rock' && userChoice === 'paper': 'You won!';
//         break;
//         case computerChoice === userChoice: 'It\'s a draw';
//         break;
//         case computerChoice === 'scissors' && userChoice === 'paper': 'Hard luck. Try again next time';
//         break;
//         case computerChoice === 'paper' && userChoice === 'rock': 'You won!';
//         break;
//         default: '';

//     }
// })      // !figure out if there is a way to use switch cases


function getResult () {

    if (computerChoice === userChoice) { 
        result = 'Draw'
    } else if (userChoice === 'rock' && computerChoice ==='scissors') { 
        result = 'Victory'
    } else if (userChoice === 'rock' && computerChoice ==='paper') { 
        result = 'Lose'
    } else if (userChoice === 'paper' && computerChoice ==='scissors') { 
        result = 'Lose'
    } else if (userChoice === 'paper' && computerChoice ==='rock') { 
        result = 'Victory'
    } else if (userChoice === 'scissors' && computerChoice ==='rock') { 
        result = 'Lose'
    } else { 
        result = 'Victory'
    }

    resultDisplay.innerHTML = result;
}

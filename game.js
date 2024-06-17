// Create a Rock Paper Scissors game


// Enter either R, P or S (rock paper or scissors)
const possibleChoices = ["R", "P", "S"];
const gameScore = {
    wins: 0,
    losses: 0,
    ties: 0,
}
const choices = {
    S: {
        user: 0,
        computer: 0
    },
    P: {
        user: 0,
        computer: 0
    },
    R: {
        user: 0,
        computer: 0
    },
}
// let winTotal, lossTotal, tieTotal = 0;


console.log(possibleChoices)
// Computer will randomly select R, P or S
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const startGame = function (userChoice) {
    // console.log(userChoice);
    let computerChoice
    let randomNumber = getRandomInt(3);
    if (randomNumber == 0) {
        computerChoice = "R";
        // choices.computer.rock++;
    } else if (randomNumber == 1) {
        computerChoice = "P";
        // choices.computer.paper++;
    } else if (randomNumber == 2) {
        computerChoice = "S";
        // choices.computer.scissors++;
    }
    console.log(`Computer chose ${computerChoice}`);
    
    if (userChoice == computerChoice) {
        // tie condition
        alert(`You chose ${userChoice}, and the computer chose ${computerChoice}.\nIt's a tie!`);
        // tieTotal++;
        gameScore.ties++;
    } else if (
           (userChoice == "R" && computerChoice == "S") 
        || (userChoice == "S" && computerChoice == "P") 
        || (userChoice == "P" && computerChoice == "R")
    ) {
        // win condition
        alert(`You chose ${userChoice}, and the computer chose ${computerChoice}.\nYou win!`);
        // winTotal++;
        gameScore.wins++;
    } else {
        // loss condition
        alert(`You chose ${userChoice}, and the computer chose ${computerChoice}.\nYou lost, sorry!`);
        // lossTotal++;
        gameScore.losses++;
    }
    choices[userChoice].user++;
    choices[computerChoice].computer++;
    alert(`
    Wins: ${gameScore.wins}
    Losses: ${gameScore.losses}
    Ties: ${gameScore.ties}

    Your choices so far:

    Scissors: ${choices.S.user}
    Paper: ${choices.P.user}
    Rock: ${choices.R.user}
        `);
}

// I want to be prompted when I enter an invalid choice. window.prompt()?
let playAgain = true
while (playAgain) { //false
    let userChoice = prompt("Enter 'R', 'P' or 'S'");
    // we want r = R; p = P; s = S
    userChoice = userChoice.toUpperCase() // changes the user's input to always be uppercase in the code

    if (possibleChoices.includes(userChoice)) {
        // start the game
        startGame(userChoice);
    } else {
        // prompt the user to start again
        alert("Incorrect choice, choose a value of either R, P or S")
    }
    // I want the option to play again whether I win or lose. game in a function?
    playAgain = confirm("Do you want to play again?"); // will return either true or false
}

// I want to see my total wins, ties, and losses after I have finished playing.
// wins, ties, losses = 0

// I want to see how many times I chose each option after I have finished playing.
// report function?
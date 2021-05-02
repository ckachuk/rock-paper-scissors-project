//rock-paper-scissors project


//first declare the global variables
const regex = [/^rock$/i, /^paper$/i, /^scissor$/i];
const options = ['rock','paper','scissor'];


//user input

//function which return the user selection
function getUserInput(){
    let userElection = prompt("Choice: Rock - Paper - Scissors");
    let validInput = checkValidInput(userElection); 

    return validInput ? userElection.toLowerCase() : getUserInput();

}


//function which return an error message
function errorMessage(error){
    return console.log(`The input is invalid`);
}


//function check invalid input
function checkValidInput(inputElection){
    let valid = false;
    for(let i = 0; i < 3; i++){
        if(inputElection.match(regex[i])){
            valid = true;
        }
    }
    return valid;
}


//computer selection

//function which process the computer selection
function getComputerSelection(){
    const number = Math.floor(Math.random() * 3);
    let computerSelection = options[number];
    return computerSelection;
}


//calculate winner

//function that processes the winner
function getWinnerRound(userSelection, computerSelection){
    let winner = '';
    if(userSelection === computerSelection){
        console.log(`Both chose ${userSelection} its a tie`);
        return winner = 'tie'; //tie
    }
    else if((userSelection ===options[0]) & (computerSelection=== options[2])){ //user chose rock and computer choice scissors 
        console.log(`You win! ${userSelection} beats  ${computerSelection} `)
        return winner = 'player'; //user winner
    }
    else if((userSelection ===options[1]) & (computerSelection=== options[0])){ //user chose paper and computer choice rock 
        console.log(`You win! ${userSelection} beats  ${computerSelection} `)
        return winner = 'player'; //user winner
    }
    else if((userSelection ===options[2]) & (computerSelection=== options[1])){ //user chose scissors and computer choice paper 
        console.log(`You win! ${userSelection} beats  ${computerSelection} `)
        return winner = 'player'; //user winner
    }
    else{
        console.log(`You lose! ${computerSelection} beats  ${userSelection} `)
        return winner = 'computer'; // computer winner
    }
}



//function which display result
function displayCurrentResult(winnerRound, scorePlayer, scoreComputer){
    console.log(`The score player: ${scorePlayer} `);
    console.log(`The score computer: ${scoreComputer} `);
    console.log(`The winner is: ${winnerRound} `);
}



//function of the game
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let roundNumber= 0;
    let totalRound = 5;

    let keepGoing = true;

    while(keepGoing){

        roundNumber ++;
        winner = playRound();

        (winner === 'tie') ? roundNumber--:
        (winner === 'computer') ? scoreComputer += 1:
        (winner === 'player') ? scorePlayer += 1: errorMessage();

        displayCurrentResult(winner, scorePlayer, scoreComputer);
    
        if(roundNumber === totalRound){
            keepGoing = false;
        }
    }
}


//function which execute one round of the game
function playRound(){
    //user input
    let player = getUserInput();
    //computer selection
    let computer = getComputerSelection();
    //processing winner
    let winner = getWinnerRound(player,computer);

    //return round winner
    return winner;
}

game();
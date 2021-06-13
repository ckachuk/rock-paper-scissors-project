//rock-paper-scissors project


//first declare the global variables
const regex = [/^rock$/i, /^paper$/i, /^scissor$/i];
const options = ['rock','paper','scissor'];

let scorePlayer = 0;
let scoreComputer = 0;
const maxScore = 5;
const itsTie = true;



//user input
const buttons = document.querySelectorAll('button');
    
    

buttons.forEach((button) => {
    button.addEventListener('click',playRound);
    //transition
    button.classList.add('buttonLoaded');
});






//function check invalid input (if the app is in console)
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
        console.log(`Both choose ${userSelection} its a tie`);
        return winner = 'tie'; //tie
    }
    else if((userSelection ===options[0]) & (computerSelection=== options[2])){ //user choose rock and computer choice scissors 
        console.log(`You win! ${userSelection} beats  ${computerSelection} `)
        return winner = 'player'; //user winner
    }
    else if((userSelection ===options[1]) & (computerSelection=== options[0])){ //user choose paper and computer choice rock 
        console.log(`You win! ${userSelection} beats  ${computerSelection} `)
        return winner = 'player'; //user winner
    }
    else if((userSelection ===options[2]) & (computerSelection=== options[1])){ //user choose scissors and computer choice paper 
        console.log(`You win! ${userSelection} beats  ${computerSelection} `)
        return winner = 'player'; //user winner
    }
    else{
        console.log(`You lose! ${computerSelection} beats  ${userSelection} `)
        return winner = 'computer'; // computer winner
    }
}



//function which display the current result
function displayCurrentResult(result, scorePlayer, scoreComputer){
   

    const pPlayer = document.querySelector("#player-score");
    pPlayer.textContent = `The score player: ${scorePlayer} `;

    
    const pComputer = document.querySelector("#computer-score");
    pComputer.textContent = `The score computer: ${scoreComputer} `;

    if(result === 'tie'){
        const pTie = document.querySelector("#current-winner");
        pTie.textContent = `The result is: ${result} `;
    }
    else{
        const pWinner = document.querySelector("#current-winner");
        pWinner.textContent = `The winner of the round is: ${result} `;
    }
    

}

//function which display the winner of the match
function displayWinner(player,computer){
    const results = document.querySelector(".results");
    const pWinnerMatch = document.createElement('p');

    (player > computer) ? pWinnerMatch.textContent = "THE WINNER OF THE MATCH IS THE PLAYER": pWinnerMatch.textContent = "THE WINNER OF THE MATCH IS THE COMPUTER";   
    


    results.appendChild(pWinnerMatch);
}




//function of the game
function game(currentWinner){
    (currentWinner === 'tie') ? itsTie:
    (currentWinner === 'computer') ? scoreComputer += 1:
    (currentWinner === 'player') ? scorePlayer += 1: errorMessage();

    checkWinner(scorePlayer, scoreComputer);
    
    displayCurrentResult(currentWinner, scorePlayer,scoreComputer);
}

//check if the amount of round is equal to total
function checkWinner (player,computer){
    if(scoreComputer === maxScore || scorePlayer === maxScore){
        displayWinner(scorePlayer, scoreComputer);
        disabledButtons();     
    }
}


//function which disabled the buttons
function disabledButtons(){
    document.getElementById("paper").disabled = true; 
    document.getElementById("rock").disabled = true; 
    document.getElementById("scissor").disabled = true; 
   
}


//function which execute one round of the game
function playRound(e){
    //remove image for the last round
    removeImageForLastRound();


    //user input
    player = e.target.id;
    
    //computer selection
    let computer = getComputerSelection();
    //processing winner
    let winner = getWinnerRound(player,computer);


    // display image of the player and computer choice
    displayChoiceImage(player, 'playerChoice');
    displayChoiceImage(computer, 'computerChoice');


    //return round winner
    return game(winner);
}


function errorMessage(){
    const results = document.querySelector(".results");

    const pError = document.createElement('p');
    pError.textContent = "An error has ocurred";
    results.appendChild(pError);

}

function displayChoiceImage(choice, idImageUser){

    const imageSelector = document.getElementById(idImageUser);
   

    if(choice=== 'rock'){
        imageSelector.setAttribute('src', 'img/rock.png'); 
    }
    else if(choice === 'scissor'){
        imageSelector.setAttribute('src', 'img/scissor.png');
    }
    else if(choice === 'paper'){
        imageSelector.setAttribute('src', 'img/paper.png');
    }
  
}


function removeImageForLastRound(){
    const remImagePlayer = document.getElementById('playerChoice');
    const remImageComputer = document.getElementById('computerChoice');

    remImageComputer.src = '';
    remImagePlayer.src = '';
}
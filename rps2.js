// Define a hands array with the values 'rock', 'paper', and 'scissors';
// const hands = ['rock' , 'paper', 'scissors'];
// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
// Define two objects for two players. Each player has name and getHand() properties.
// Define a function called playRound() that
//      Takes two player objects as arguments
//      Gets hands from each
//      Determines the winner
//      Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)
// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

const hands=["rock","paper","scissors"];
function getHand(){
    return hands[parseInt(Math.random()*10)%3];
}
let playerOne={
    Name:"sam",
    getHandMethod: getHand, 
    wins:0
};
let playerTwo={
    Name:"frodo",
    getHandMethod: getHand, 
    wins:0
};
let playerOneWins=0;
let playerTwoWins=0;
let roundCount=0;

function playRound(playerOne,playerTwo){
    var playerOneHand=playerOne.getHandMethod();
    var playerTwoHand=playerTwo.getHandMethod();
    
    console.log(playerOne.Name+" uses "+playerOneHand);
    console.log(playerTwo.Name+" uses "+playerTwoHand);

    if(playerOneHand==playerTwoHand){
        roundCount+=1;
        console.log("It is a tie|||Round number:"+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
    }
//p1 Rock?
    else if (playerOneHand === "rock") {
        if (playerTwoHand === "scissors") {
            playerOneWins+=1;
            playerOne.wins+=1;
            roundCount+=1;
            console.log("CLANK! ||| "+ playerOne.Name+" wins this round|||Round number:"+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        } else {
            playerTwoWins+=1;
            playerTwo.wins+=1;
            roundCount+=1;
            console.log("CRUMPLE! ||| "+ playerTwo.Name+" wins this round|||Round number:"+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        }
    }
//p1 Paper?
    else if (playerOneHand === "paper") {
        if (playerTwoHand === "rock") {
            playerOneWins+=1;
            playerOne.wins+=1;
            roundCount+=1;
            console.log("CRUMPLE! ||| "+ playerOne.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        } else {
            playerTwoWins+=1;
            playerTwo.wins+=1;
            roundCount+=1
            console.log("SLICE! ||| "+ playerTwo.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        }
    }
//p1 Scissors?
    else if (playerOneHand === "scissors") {
        if (playerTwoHand === "paper") {
            playerOneWins+=1;
            playerOne.wins+=1;
            roundCount+=1;
            console.log("SLICE! ||| " +playerOne.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        } else {
            playerTwo.wins+=1;
            playerTwoWins+=1;
            roundCount+=1;
            console.log("CLANK! ||| " +playerTwo.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        }
    }
//p2 scissors?
    else if (playerTwoHand === "scissors"){
        if (playerOneHand === "paper"){
            playerTwo.wins+=1;
            playerTwoWins+=1;
            roundCount+=1;
            console.log("SLICE! ||| "+ playerTwo.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        } else {
            playerOne.wins+=1;
            playerOneWins+=1;
            roundCount+=1;
            console.log("CLANK! ||| "+ playerOne.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        }
    }
//p2 paper?
    else if (playerTwoHand === "paper") {
        if (playerOneHand === "rock") {
            playerTwo.wins+=1;
            playerTwoWins+=1;
            roundCount+=1;
            console.log("CRUMPLE! ||| "+ playerTwo.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        } else {
            playerOne.wins+=1;
            playerOneWins+=1;
            roundCount+=1;
            console.log("SLICE! ||| "+ playerOne.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        }
    }
//p2 rock?
    else if (playerTwoHand === "rock") {
        if (playerOneHand === "scissors") {
            playerTwo.wins+=1;
            playerTwoWins+=1;
            roundCount+=1;
            console.log("CLANK! ||| "+ playerTwo.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        } else {
            playerOne.wins+=1;
            playerOneWins+=1;
            roundCount+=1;
            console.log("CRUMPLE! ||| "+ playerOne.Name+' wins this round|||Round number:'+roundCount+' ||| '+playerOne.Name+' '+playerOneWins+'||'+playerTwo.Name+' '+playerTwoWins);
        }
    }
}
function playGame(playerOne , playerTwo , playUntil=5){
    if(playerOneWins < playUntil && playerTwoWins < playUntil) {
        playRound(playerOne, playerTwo);
        playGame(playerOne , playerTwo , playUntil);
    }
}
function result(){
    playGame(playerOne , playerTwo , 5);
    if (playerOneWins > playerTwoWins) { 
        console.log(playerOne.Name + " wins game of " + playerOneWins + " out of " + roundCount); 
    } else if (playerOneWins < playerTwoWins) {
        console.log(playerTwo.Name + " wins game of " + playerTwoWins + " out of " + roundCount);
    } else 
    {
        console.log("tie game");
    }
}
result();
function getComputerChoice(){
    let ran = Math.floor(Math.random()*3);
    if(ran == 0) return "rock";
    if(ran == 1) return "paper";
    if(ran == 2) return "scissors";
}
function getHumanChoice(){
    let input = prompt('Enter your choice');
    return input;
}
let humanScore = 0;
let computerScore = 0;

function playRound(){
    let humanChoice = getHumanChoice().toLocaleLowerCase();
    let computerChoice = getComputerChoice();
    if(humanChoice != computerChoice){
    if(humanChoice == "rock" && computerChoice == "paper") {console.log("You lose!!"); computerScore++;}
    else if(humanChoice == "paper" && computerChoice == "rock") {console.log("You win!!"); humanScore++;}
    else if(humanChoice == "paper" && computerChoice == "scissor") {console.log("You lose!!"); computerScore++;}
    else if(humanChoice == "scissor" && computerChoice == "paper") {console.log("You win!!"); humanScore++;}
    else if(humanChoice == "scissor" && computerChoice == "rock") {console.log("You lose!!"); computerScore++;}
    else if(humanChoice == "rock" && computerChoice == "scissor") {console.log("You win!!"); humanScore++;}
    }
    else console.log("It's a draw!!");
}
for(let i = 0;i<5;i++){
    playRound();
    console.log("Score :\nPlayer :" + humanScore + "\tComputer :" + computerScore);
}
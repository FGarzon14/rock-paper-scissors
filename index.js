let choices = ["rock", "paper", "scissors"];

var playerScore = 0;
var computerScore = 0;



function playRound(playerSelection) {
let computerChoice;




let randomChoice = Math.floor(Math.random() * choices.length);
computerChoice = choices[randomChoice];


if (playerSelection === computerChoice){
    alert("It's a tie!");
}
 else if(playerSelection === "rock" && computerChoice === "scissors" ||
         playerSelection === "paper" && computerChoice === "rock" ||
         playerSelection === "scissors" && computerChoice === "paper") {
            console.log("You win!");
            playerScore++; 
         }

  else { 
    computerScore++;

}
document.getElementById("playerScore").textContent = "Player has " + playerScore + " points";
document.getElementById("computerScore").textContent = "Computer has " + computerScore + " points";

if (playerScore === 5){
    alertWin();
} else if (computerScore === 5){
    alertLoose();
}

function alertWin(){
    alert("You won! Congratulations!");
}

function alertLoose(){
    alert("You lost. Choose a move to try again.");
}

if (playerScore === 5 || computerScore === 5){
  resetGame();
}
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}





const buttonRock = document.getElementById('buttonRock');
const buttonPaper = document.getElementById('buttonPaper');
const buttonScissors = document.getElementById('buttonScissors');

buttonRock.addEventListener("click", function() {
    playRound("rock");
});

buttonPaper.addEventListener("click", function(){
    playRound("paper");
});

buttonScissors.addEventListener("click", function(){
    playRound("scissors");
});


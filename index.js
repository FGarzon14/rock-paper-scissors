let choices = ["rock", "paper", "scissors"];

var playerScore = 0;
var computerScore = 0;



function playRound(playerSelection) {

let computerChoice = choices[Math.floor(Math.random() * choices.length)];

if (!choices.includes(playerSelection)) {
    alert("Invalid move");
    return;
}

if (playerSelection === computerChoice){
    alert("It's a tie!");
}
 else if(playerSelection === "rock" && computerChoice === "paper" ||
         playerSelection === "paper" && computerChoice === "rock" ||
         playerSelection === "rock" && computerChoice === "scissors") {
            console.log("You win!");
            playerScore++; 
         }

  else { 
    console.log("You loose");
    computerScore++;
}
document.getElementById("playerScore").textContent = "Player has " + playerScore + " points";
document.getElementById("computerScore").textContent = "Computer has " + computerScore + " points";
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


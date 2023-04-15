const rock = 'Rock'
const paper = 'Paper'
const scissors = 'Scissors'



function getComputerchoice(max) {
    return Math.floor(Math.random() * 3);
  }
  
console.log(getComputerChoice(3))


/*

function computerSelection() {
    
    if (getComputerChoice === 2 ) {
        let computerSelection = rock;
        console.log(rock)
        
    }  else if (getComputerChoice === 3) {
        let computerSelection = paper;
        console.log(paper)

    } else {
        let computerSelection = scissors;
        console.log(scissors)
    }
}




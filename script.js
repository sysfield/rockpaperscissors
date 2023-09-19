function getComputerChoice()
{
    var x = ["rock", "paper", "scissors"];
    console.log(x[Math.round((Math.random()*10)%2)]);
}

const computerSelection = getComputerChoice();
const playerSelection = (prompt("rock, paper, or scissors?"));

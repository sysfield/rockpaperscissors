function getComputerChoice()
{
    var x = ["rock", "paper", "scissors"];
    return x[Math.round((Math.random()*10)%2)];
}

function playRound(player, computer)
{
    if (player == computer)
    {
        return 2;
    }
}

function game()
{

}

const computerSelection = getComputerChoice();
const playerSelection = "rock";//prompt("rock, paper, or scissors?").toLowerCase();

console.log(playRound(playerSelection, computerSelection));


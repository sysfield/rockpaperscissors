function getComputerChoice()
{
    var x = ["rock", "paper", "scissors"];
    return x[Math.round((Math.random()*10)%2)];
}

function playRound(player, computer)
{
    x = 9;

    if (player == computer)
    {
        x = 2;
    }

    switch (x)
    {
        case 0:
            return `You lose! ${computer} beats ${player}`;
        case 1:
            return `You win! ${player} beats ${computer}`
        case 2:
            return "Draw!"
    }
}

function game()
{

}

const computerSelection = getComputerChoice();
const playerSelection = "rock";//prompt("rock, paper, or scissors?").toLowerCase();

console.log(playRound(playerSelection, computerSelection));


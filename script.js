function getComputerChoice()
{
    var x = ["rock", "paper", "scissors"];
    return x[Math.round((Math.random()*10)%2)];
}

function playRound(player, computer)
{
    var x = 0;

    if (player == computer)
    {
        x = 2;
    }
    
    if (player == "rock" && computer == "paper")
    {
        x = 0;
    }
    else if (player == "rock" && computer == "scissors")
    {
        x = 1;
    }
    else if (player == "paper" && computer == "rock")
    {
        x = 1;
    }
    else if (player == "paper" && computer == "scissors")
    {
        x = 0;
    }
    else if (player == "scissors" && computer == "rock")
    {
        x = 0;
    }
    else if (player == "scissors" && computer == "paper")
    {
        x = 1;
    }

    return x;
}

function game()
{   
    var x = 0
    for (let i = 0; i < 5; i++)
    {
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
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";//prompt("rock, paper, or scissors?").toLowerCase();

console.log(playRound(playerSelection, computerSelection));


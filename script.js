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

function game(computer)
{   
    var x = 0;
    var round = ``;
    var z = 0;
    var y = 0;
    var s = "s";
    var winner = `The winner is ! The computer won ${z} round${s}, you won ${y}!`;
    for (let i = 0; i < 5; i++)
    {
        const computer = getComputerChoice();
        const player = "rock";//prompt("rock, paper, or scissors?").toLowerCase();
        x = playRound(player, computer);
        switch (x)
        {
            case 0:
                round = `You lose! ${computer} beats ${player}`;
                break;
            case 1:
                round = `You win! ${player} beats ${computer}`;
                break;
            case 2:
                round = "Draw!";
                break;
        }
        console.log(round);
    }
}


var z = 0;
var y = 0;
var divScore = document.getElementById('score');
var divWin = document.getElementById('win');

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

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const player = btn.innerHTML;
        game(player);
    });
});

function game(player)
{   
    let x = 0;
    let round = ``;
    let s = "s";
    let name = "";
    const computer = getComputerChoice();
    
    x = playRound(player, computer);
    if ((z < 5 && y < 5))
    {
        switch (x)
        {
            case 0:
                round = `You lose! ${computer} beats ${player}`;
                z++;
                break;
            case 1:
                round = `You win! ${player} beats ${computer}`;
                y++;
                break;
            case 2:
                round = "Draw!";
                break;
        }
        divScore.textContent = `your score: ${y}, computer score: ${z}`;
        divWin = ``;
    }
    else
    {
        if (z < 2 && z != 0)
        {
            s = "";
        }
        if (z > y)
        {
            name = "the computer";
        }
        else if (z < y)
        {
            name = "you";
        }
        else if (z == y)
        {
            name = "no one";
        }
        divWin.textContent = `The winner is ${name}! The computer won ${z} round${s}, you won ${y}!`;
        z = 0;
        y = 0;
    }
}

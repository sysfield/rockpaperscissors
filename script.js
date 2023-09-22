var computerTally = 0;
var playerTally = 0;
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
        fnTally(player);
    });
});

function fnTally(player)
{   
    let tally = 0;
    let computer = getComputerChoice();
    
    tally = playRound(player, computer);
    if ((computerTally < 5 && playerTally < 5))
    {
        switch (tally)
        {
            case 0:
                computerTally++;
                break;
            case 1:
                playerTally++;
                break;
            case 2:
                break;
        }
        divScore.textContent = `your score: ${playerTally}, computer score: ${computerTally}`;
        // console.log(computerTally, playerTally);
        divWin.textContent = ``;
    }
    else
    {
        win(computerTally, playerTally);
    }
}

function win(computerTally, playerTally)
{
    let s = "s";
    let name = "";
    // else
    // {
        if (computerTally < 2 && computerTally != 0)
        {
            s = "";
        }
        if (computerTally > playerTally)
        {
            name = "the computer";
        }
        else if (computerTally < playerTally)
        {
            name = "you";
        }
        else if (computerTally == playerTally)
        {
            name = "no one";
        }
        divWin.textContent = `The winner is ${name}! The computer won ${computerTally} round${s}, you won ${playerTally}!`;
        computerTally = 0;
        playerTally = 0;
    // }
}

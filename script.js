function getComputerChoice()
{
    var x = ["rock", "paper", "scissors"];
    console.log(x[Math.round((Math.random()*10)%3)]);
}

getComputerChoice();
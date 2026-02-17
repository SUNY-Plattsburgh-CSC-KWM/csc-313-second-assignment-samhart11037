const runGame = function() {
    // Your code additions go here
    var firstTeam = prompt("Enter the first team name: ");
    var firstScore = prompt("Enter " + firstTeam + "'s score: ");
    var secondTeam = prompt("Enter the second team name: ");
    var secondScore = prompt("Enter " + secondTeam + "'s score: ");

    if (firstScore > secondScore){
        var gameResults = `${firstTeam} won the game, with a score of ${firstScore}!`;
    }
    else if (secondScore > firstScore){
        var gameResults = `${secondTeam} won the game, with a score of ${secondScore}!`;
    }
    else{
        var gameResults = `The game was a tie, with both teams scoring ${firstScore} points!`;
    }
  
    // Code that adds a new paragraph with a string to the "div" in the HTML file 
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = gameResults;
    divId.appendChild(newPara);
}

const runGame = function() {
    // Your code additions go here
    const firstTeam = prompt("Enter the first team name: ");
    const firstScore = prompt("Enter " + firstTeam + "'s score: ");
    const secondTeam = prompt("Enter the second team name: ");
    const secondScore = prompt("Enter " + secondTeam + "'s score: ");

    if (firstScore > secondScore){
        const gameResults = `${firstTeam} won the game, with a score of ${firstScore}!`;
    }
    else if (secondScore > firstScore){
        const gameResults = `${secondTeam} won the game, with a score of ${secondScore}!`;
    }
    else{
        const gameResults = `The game was a tie, with both teams scoring ${firstScore} points!`;
    }
  
    // Code that adds a new paragraph with a string to the "div" in the HTML file 
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = gameResults;
    divId.appendChild(newPara);
}

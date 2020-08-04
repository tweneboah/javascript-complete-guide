//Selection
const player1ScoreValue = document.querySelector(".player1-score-value");
const computerscoreValue = document.querySelector(".computer-score-value");
const btns = document.querySelectorAll("button");
const player1Container = document.querySelector(".player1-container");
const mainContainer = document.querySelector(".main-container");
//Looping through the buttons
for (let i = 0; i <= btns.length - 1; i++) {
  btns[i].addEventListener("click", function () {
    //Computer guess
    let computerGuess = Math.floor(Math.random() * 2);
    let player1Guess = Math.floor(Math.random() * 2);
    if (computerGuess === player1Guess) {
      mainContainer.setAttribute("class", "main-container-success");
    } else {
      mainContainer.setAttribute("class", "main-container-warning");
    }
  });
}

console.log(btns);

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let playerScoreValue = 0;
let computerScoreValue = 0;

function playGame(choice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const playerChoice = choice;
  playerDisplay.textContent = `PLAYER : ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER : ${computerChoice}`;

  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!";
    result.style.color = "black";
    result.style.visibility = "visible";
  } else {
    switch (playerChoice) {
      case "rock":
        result.textContent =
          computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        result.style.visibility = "visible";
        break;
      case "paper":
        result.textContent =
          computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        result.style.visibility = "visible";
        break;
      case "scissors":
        result.textContent =
          computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        result.style.visibility = "visible";
        break;
    }
    if (result.textContent === "YOU WIN!") {
      result.style.color = "green";
      playerScoreValue++;
      playerScore.textContent = playerScoreValue;
    } else {
      result.style.color = "red";
      computerScoreValue++;
      computerScore.textContent = computerScoreValue;
    }
  }
}

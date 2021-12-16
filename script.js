const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const resetIcon = document.querySelector(".reset-icon");
const allGameIcons = document.querySelectorAll(".far");
const playerChoiceEl = document.getElementById("playerChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

const resultTest = document.getElementById("resultText");

const playerIcons = [
  playerRock,
  playerPaper,
  playerScissors,
  playerLizard,
  playerSpock,
];

const computerIcons = [
  computerRock,
  computerPaper,
  computerScissors,
  computerLizard,
  computerSpock,
];

const choices = {
  Rock: { name: "Rock", defeats: ["Scissors", "Lizard"] },
  Paper: { name: "Paper", defeats: ["Rock", "Spock"] },
  Scissors: { name: "Scissors", defeats: ["Paper", "Lizard"] },
  Lizard: { name: "Lizard", defeats: ["Paper", "Spock"] },
  Spock: { name: "Spock", defeats: ["Scissors", "Rock"] },
};

let lastPlayerChoice = null;

function selectIcon() {
  lastPlayerChoice && lastPlayerChoice.classList.remove("selected");
  playerChoiceEl.textContent = ` --- ${this.title}`;
  this.classList.add("selected");
  lastPlayerChoice = this;

  computerSelectIcon();
}

let lastComputerChoice = null;

function computerSelectIcon() {
  let computerIcon =
    computerIcons[Math.floor(Math.random() * computerIcons.length)];

  lastComputerChoice && lastComputerChoice.classList.remove("selected");
  computerChoiceEl.textContent = ` --- ${computerIcon.title}`;
  computerIcon.classList.add("selected");
  lastComputerChoice = computerIcon;

  calculateScore();
}

let playerScore = 0;
let computerScore = 0;

function calculateScore() {
  let computerChoice = lastComputerChoice.title;
  let playerChoice = lastPlayerChoice.title;
  if (computerChoice !== playerChoice) {
    if (choices[computerChoice].defeats.includes(playerChoice)) {
      computerScore++;
      resultTest.textContent = "Computer Won!";
    } else {
      playerScore++;
      resultTest.textContent = "You Won!";
    }
  } else {
    resultTest.textContent = "It's a tie.";
  }
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

playerIcons.forEach((icon) => {
  icon.addEventListener("click", selectIcon);
});

function resetGame() {
  lastPlayerChoice.classList.remove("selected");
  playerChoiceEl.textContent = "";

  lastComputerChoice.classList.remove("selected");
  computerChoiceEl.textContent = "";

  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "";
  computerScoreEl.textContent = "";
  resultTest.textContent = "";
}

resetIcon.addEventListener("click", resetGame);

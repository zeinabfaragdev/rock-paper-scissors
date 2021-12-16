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
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let lastPlayerChoice = null;

function selectIcon() {
  lastPlayerChoice && lastPlayerChoice.classList.remove("selected");
  playerChoiceEl.textContent = ` --- ${this.id.slice(6)}`;
  this.classList.add("selected");
  lastPlayerChoice = this;

  computerSelectIcon();
}

let lastComputerChoice = null;

function computerSelectIcon() {
  let computerIcon =
    computerIcons[Math.floor(Math.random() * computerIcons.length)];

  lastComputerChoice && lastComputerChoice.classList.remove("selected");
  computerChoiceEl.textContent = ` --- ${computerIcon.id.slice(8)}`;
  computerIcon.classList.add("selected");
  lastComputerChoice = computerIcon;
}

playerIcons.forEach((icon) => {
  icon.addEventListener("click", selectIcon);
});

function resetGame() {
  lastPlayerChoice.classList.remove("selected");
  playerChoiceEl.textContent = "";

  lastComputerChoice.classList.remove("selected");
  computerChoiceEl.textContent = "";
}

resetIcon.addEventListener("click", resetGame);

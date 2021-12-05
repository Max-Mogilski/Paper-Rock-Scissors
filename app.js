const startGameBtn = document.getElementById("start-game-btn");

const SELECTION_ROCK = "rock";
const SELECTION_PAPER = "paper";
const SELECTION_SCISSORS = "scissors";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESUTL_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
	const selection = prompt("Rock, Paper or Scissors?", "");

	if (
		selection !== SELECTION_ROCK &&
		selection !== SELECTION_PAPER &&
		selection !== SELECTION_SCISSORS
	) {
		alert("Invalid choice! We chose Rock for you!");
		return SELECTION_ROCK;
	}
	return selection;
};

const getComputerChoice = function () {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return SELECTION_ROCK;
	} else if (randomValue < 0.67) {
		return SELECTION_PAPER;
	} else {
		return SELECTION_SCISSORS;
	}
};

const getWinner = function (cChoice, pChoice) {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		(cChoice === SELECTION_ROCK && pChoice === SELECTION_PAPER) ||
		(cChoice === SELECTION_PAPER && pChoice === SELECTION_SCISSORS) ||
		(cChoice === SELECTION_SCISSORS && pChoice === SELECTION_ROCK)
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESUTL_COMPUTER_WINS;
	}
};

startGameBtn.addEventListener("click", function () {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log("Game is starting...");
	console.log(getComputerChoice());
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChoice();
	const winner = getWinner(computerChoice, playerChoice);
	console.log(winner);
});
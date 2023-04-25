let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");

const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  var smallUser = "(User)".fontsize(3).sub();
  var smallComp = "(Comp)".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;

  userScore_span.innerHTML = userScore;

  computerScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${letter2Word(
    userChoice
  )}${smallUser} beats ${letter2Word(computerChoice)}${smallComp} You Win!`;

  console.log("winner");

  userChoiceDiv.classList.add("green-glow");
  setTimeout(function () {
    userChoiceDiv.classList.remove("green-glow");
  }, 300);
}

function letter2Word(character) {
  if (character === "r") return "Rock";
  if (character === "p") return "Paper";
  return "scissors";
}

function lose(userChoice, computerChoice) {
  var smallUser = "(User)".fontsize(3);
  var smallComp = "(Comp)".fontsize(3);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  console.log("loser");

  result_div.innerHTML =
    wordUpgrade(computerChoice) +
    smallComp +
    " beats " +
    wordUpgrade(userChoice) +
    smallUser +
    " You lose!";

  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 300);
}

function wordUpgrade(word) {
  if (word === "r") return "ROCK";
  if (word === "p") return "PAPER";
  return "SCISSORS";
}

function tie(computerChoice, userChoice) {
  console.log("draww");
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  var smallUser = "(User)".fontsize(3);
  var smallComp = "(Comp)".fontsize(3);
  result_div.innerHTML =
    wordUpgrade(computerChoice) +
    smallComp +
    " matches " +
    wordUpgrade(userChoice) +
    smallUser +
    " It's a draw";
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();

const maxScore = document.querySelectorAll(".max-score");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const result = document.querySelector("p#result");
const winner = document.querySelector("p#winner");
const reload = document.querySelector("button#reload");
const buttons = document.querySelectorAll(".choiceButton");

reload.addEventListener("click", () => {
  window.location.reload();
});

let humanChoice;
let machineChoice;
let humanScoreValue = 0;
let machineScoreValue = 0;
const maxScoreValue = 10;

maxScore.forEach((score) => {
  score.innerHTML = maxScoreValue;
});

function getHumanChoice(buttonValue) {
  humanChoice = buttonValue;
}

function getMachineChoice() {
  const choices = ["pedra", "papel", "tesoura"];
  const randomChoices = Math.round(Math.random() * (choices.length - 1));
  machineChoice = choices[randomChoices];
}

function determineWinner() {
  if (humanChoice === machineChoice) {
    result.innerHTML = "Empate, tente novamente!";
    result.style.display = "block";
  } else if (
    (humanChoice === "pedra" && machineChoice === "tesoura") ||
    (humanChoice === "papel" && machineChoice === "pedra") ||
    (humanChoice === "tesoura" && machineChoice === "papel")
  ) {
    result.innerHTML = "Ponto para você!";
    result.style.display = "block";
    humanScoreValue++;
    humanScore.innerHTML = humanScoreValue;
  } else {
    result.innerHTML = "Ponto para o Bot!";
    result.style.display = "block";
    machineScoreValue++;
    machineScore.innerHTML = machineScoreValue;
  }

  if (humanScoreValue === maxScoreValue) {
    result.style.display = "none";
    winner.innerHTML = "Parabéns, você ganhou!!!";
    winner.style.display = "block";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  if (machineScoreValue === maxScoreValue) {
    result.style.display = "none";
    winner.innerHTML = "Você perdeu, tente novamente!";
    winner.style.display = "block";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      getHumanChoice(button.value);
      getMachineChoice();
      determineWinner();
    });
  });
}

playGame();

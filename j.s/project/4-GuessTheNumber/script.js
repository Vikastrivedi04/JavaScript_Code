let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector("#subt");
const user = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const low = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let PlayGame = true;
if (PlayGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(user.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter a valid number`);
  } else if (guess < 1) {
    alert(`please enter a valid number`);
  } else if (guess > 100) {
    alert(`please enter a valid number 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      chekGuess(guess);
    }
  }
}
function chekGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`number is tooo high`);
  }
}
function displayGuess(guess) {
  user.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  low.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  user.value = "";
  user.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  PlayGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    user.removeAttribute("disabled");
    startOver.removeChild(p);
    PlayGame = true;
  });
}

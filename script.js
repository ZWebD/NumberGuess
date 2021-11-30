'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;
//let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = randomNumber;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  //console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector(`.message`).textContent = `No number!`;
    displayMessage(`No number!`);
  } else if (20 < guess || guess < 1) {
    displayMessage(`Number need to be between 1-20!`);
  } else if (guess === secretNumber) {
    //document.querySelector(`.message`).textContent = `Correct Number!`;
    displayMessage(`Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highScore`).textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(`.message`).textContent = guess > secretNumber ? `Too high!` : `Too low!`;
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      //document.querySelector(`.message`).textContent = `You lost!`;
      displayMessage(`You lost!`);
      score = 0;
      document.querySelector(`.score`).textContent = score;
    }
  }
  //else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too high!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost!`;
  //     score = 0;
  //     document.querySelector(`.score`).textContent = score;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too low!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost!`;
  //     score = 0;
  //     document.querySelector(`.score`).textContent = score;
  //   }
  // }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  //secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = randomNumber;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  //document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).value = ``;
});

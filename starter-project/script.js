'use strict';

/*console.log(document.querySelector(`.message`).textContent);
//DOM = Document Object Model //windows+. for emoji
document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 14;
document.querySelector(`.score`).textContent = 21;

//for inputs 
document.querySelector(`.guess`).value = 23;
*/

//APPLICATION AND EVENT LISTENERS
const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

//FUNCTIONS
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};
const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};
const displayGuess = function (guess) {
  document.querySelector(`.guess`).value = guess;
};
const displayHighscore = function (highscore) {
  document.querySelector(`.highscore`).textContent = highscore;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No number!`;
    //WHEN PLAYER WINS
  } else if (guess === number) {
    //document.querySelector(`.message`).textContent = `✅ Correct Number!`;
    displayMessage(`✅ Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `#00ff00`;
    document.querySelector(`.number`).style.width = `40rem`;
    document.querySelector(`.number`).textContent = number;
    if (score > highscore) {
      highscore = score; //high score
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //WHEN PLAYER SELECTS WRONG NUMBER high
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > number ? `📈 Too high!` : ` 📉 Too low!`;
      score -= 1; //score-- //score = score - 1
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💣 You Lost!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
  /*else if (guess > number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = ` 📈 Too high!`;
      score -= 1; //score-- //score = score - 1
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💣 You Lost!`;
      document.querySelector(`.score`).textContent = 0;
    }
    // WHEN PLAYER SELECTS WRONG NUMBER LOW
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = ` 📉 Too low!`;
      score -= 1; //score-- //score = score - 1
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💣 You Lost!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }*/
});

//ON CLICK AGAIN - coding challenge
document.querySelector(`.again`).addEventListener(`click`, function () {
  const number = Math.trunc(Math.random() * 20) + 1;

  let score = 20;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

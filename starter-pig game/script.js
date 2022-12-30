'use strict';

//player class
const player0Element = document.querySelector(`.player--0`);
const player1Element = document.querySelector(`.player--1`);

//score id
const score0Element = document.getElementById(`score--0`);
const score1Element = document.getElementById(`score--1`);
const current0Element = document.getElementById(`current--0`);
const current1Element = document.getElementById(`current--1`);

//dice and button class
const diceElement = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//STARTING CONDITIONS
//variables scoping
let scores, currentScore, activePlayer, playing;

//new game function
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;

  current0Element.textContent = 0;
  current1Element.textContent = 0;

  player0Element.classList.remove(`player--winner`);
  player1Element.classList.remove(`player--winner`);
  player0Element.classList.add(`player--active`);
  player1Element.classList.remove(`player--active`);

  diceElement.classList.add(`hidden`);
};
init();

//switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle(`player--active`);
  player1Element.classList.toggle(`player--active`);
};

//ROLLING THE DICE
btnRoll.addEventListener(`click`, function () {
  //Generate random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display the dice
    diceElement.classList.remove(`hidden`);
    diceElement.src = `dice-${dice}.png`;

    //switch when its 1
    if (dice !== 1) {
      //add current score to dice
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0Element.textContent = currentScore; //CHANGE LATER
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//hold button event
btnHold.addEventListener(`click`, function () {
  //add current score to total score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //scores >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceElement.classList.add(`hidden`);
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//new game event
btnNew.addEventListener(`click`, init);

'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnShowModal = document.querySelectorAll(`.show-modal`);
//console.log(btnCloseModal, btnShowModal);

//OPEN MODAL FUNCTION
const OpenModal = function () {
  //console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

//CLOSE MODAL FUNCTION
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

//SHOW THE MODAL
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener(`click`, OpenModal);
}

//CLOSE THE MODAL
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

//KEYBOARD FUNCTION
document.addEventListener(`keydown`, function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains(`hidden`)) {
    closeModal();

    console.log(`Esc was pressed!`);
  }
});

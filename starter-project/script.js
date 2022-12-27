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
document.querySelector(`.check`).addEventListener(
    `click`, function () {
        const guess = document.querySelector(`.guess`).value;
        console.log(guess);
    }
)


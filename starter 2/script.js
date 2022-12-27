"use strict";

/*function logger() {
    console.log(`Fundamentals two!`);
}

// calling a function
logger();
logger();
logger();
logger();

function scores (maths, english){
    console.log(maths, english);
    const sum = `${maths + english}`;
    return sum;
}

const result1 = scores (10.9, 100)/2;
console.log(`Final result is ${result1} percent. 
congratulations!!!`);

const result2 = scores (109, 120)/2;
console.log(`Final result is ${result2} percent. 
congratulations!!!`);

// function expression
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge (1998);
console.log(age1);

//  function declaration

// const age2 = calcAge2 (1998);

function calcAge2 (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2 (1998);
console.log(age2);

// Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const  age3 = calcAge3(1998);
console.log(age3);

const retirementYears = (birthYear, name) => {
    const age4 = 2022 - birthYear;
    const retirement = 65 - age4;
    const loggerText = `${name} retires in ${retirement} years!`
    return loggerText;
}

const logMessage1 = retirementYears(1998, 'Olatunbosun');
console.log(logMessage1);

const logMessage2 = retirementYears(1999, 'Ola');
console.log(logMessage2);

//Coding challenge 1
const calcAverage = (a,b,c) => (a + b + c)/3;
console.log(calcAverage(10, 20, 30));

const scoreDolphins = calcAverage(44,23,71);
const scoreKoala = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoala);

const checkWinner = (avgDolphins, avgKoala) => {
    if (avgDolphins >= avgKoala * 2){
        console.log(`dolphins win ${avgDolphins} 
        vs... ${avgKoala}`);
    } else if (avgKoala >= avgDolphins * 2){
        console.log(`koala win ${avgKoala} 
        vs... ${avgDolphins}`);
    } else {
        console.log(`no winner......`);
    }
}

checkWinner(scoreDolphins,scoreKoala);

//test 2
const scoreDolphins2 = calcAverage(85,54,41);
const scoreKoala2 = calcAverage(23, 34, 27);
console.log(scoreDolphins2, scoreKoala2);

const checkWinner2 = (avgDolphins2, avgKoala2) => {
    if (avgDolphins2 >= avgKoala2 * 2){
        console.log(`dolphins win ${avgDolphins2} 
        vs... ${avgKoala2}`);
    } else if (avgKoala2 >= avgDolphins2 * 2){
        console.log(`koala win ${avgKoala2} 
        vs... ${avgDolphins2}`);
    } else {
        console.log(`no winner......`);
    }
}

checkWinner2(scoreDolphins2,scoreKoala2);

//ARRAYS  
const numbers = [2,3,4,5,6,7,8,9];
console.log(numbers);

const dates = new Array(2,3,4,5,6,7,8,9);
console.log(dates.length);
console.log(dates);
console.log(dates[6]);
dates[6] = 37;
dates[5] = 300;
console.log(dates);

const firstName = 'Oyiza';
const age = 20;
const color = 'seinna';
const rahmat = [firstName, age, color];
console.log(rahmat);

const ageRange = (birthDay) => 2022 - birthDay;
const yearRange = [1998, 1999, 2000, 2001]

const ages1 = ageRange(yearRange[0]);
const ages2 = ageRange(yearRange[1]);
const ages3 = ageRange(yearRange[2]);
const ages4 = ageRange(yearRange[3]);

const ages = [ages1, ages2, ages3, ages4];
console.log(ages);
console.log(ages.length);
console.log(ages.length - 1);

//ARRAY METHODS
const num = [0, 1, 2, 3, 4];
num.push(5, 50, 500);
num.unshift(10, 100, 1000);
num.pop();
num.shift();
console.log(num);
console.log(num.indexOf(1000));
console.log(num.includes(1000));
console.log(num.includes(5000));

if (num.includes(1000)) {
    console.log (`1000 is present!!!!`);
}
//coding challenge
const perCent = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2
}

const bill = [125, 555, 44];
const tips = [perCent(bill[0]), perCent(bill[1]), perCent(bill[2])];
console.log(bill, tips);

const total = [bill[0,1,2]] + [tips[0, 1, 2]];
console.log(total);

//OBJECTS
const joseph = {
    firstName : `Olatunbosun`,
    lastName : `Agunbiade`,
    age : 2022 - 1998,
    color : `yellow`,
    friends : [`jay`, `jones,`, `jesse`, `ace`, `nala`],
    numbers : [0, 1, 2, 3, 4, 5]
};
console.log(joseph);
console.log(joseph.age);
console.log(joseph[age, `lastName`]);



const interestedIn = prompt(`what information are you looking for `);

if (joseph[interestedIn]) {
    console.log(joseph[interestedIn]);
} else {
   console.log(prompt(`wrong input, please input the right detail(s)`));
}

joseph.location = `Nigeria`;
joseph[`twitter`] = '@AGUNBIADEOLATU4';
console.log(joseph);

const txt = `joseph has ${joseph.friends.length} friends
and his best friend is ${joseph.friends[4]}`;
console.log(txt);
*/

const joseph = {
  firstName: `Olatunbosun`,
  lastName: `Agunbiade`,
  birthYear: 1998,
  color: `yellow`,
  friends: [`jay`, `jones,`, `jesse`, `ace`, `nala`],
  numbers: [0, 1, 2, 3, 4, 5],
  hasWife: false,

  // calcAge : function (birthYear) {
  ///     return 2022 - birthYear;
  // }

  //calcAge : function () {
  //    return 2022 - this.birthYear;
  // }
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    if (this.hasWife) {
      console.log(
        `${this.firstName} is ${this.age} years old and he has a wife`
      );
    } else {
      console.log(
        `${this.firstName} is ${this.age} years old and he has no wife`
      );
    }
    return this;
  },
};
console.log(joseph.calcAge());
console.log(joseph.age * 10);

//if(joseph.hasWife) {
//    console.log(`${joseph.firstName} is ${joseph.age} years old and he has a wife`);
//} else {
//    console.log(`${joseph.firstName} is ${joseph.age} years old and he has no wife`);
//}

console.log(joseph.getSummary());

//CODING CHALLENGE 3

const mark = {
  firstName: `Mark`,
  lastName: `miller`,
  weight: 79,
  height: 1.69,

  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: `john`,
  lastName: `smith`,
  weight: 92,
  height: 1.95,

  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const getWinner = function () {
  if (mark.bmi > john.bmi) {
    console.log(
      `${mark.firstName}'s bmi ${mark.bmi} is greater than ${john.firstName}'s bmi ${john.bmi}`
    );
  } else {
    console.log(
      `${john.firstName}'s bmi ${john.bmi} is greater than ${mark.firstName}'s bmi ${mark.bmi}`
    );
  }
  return this;
};

mark.calcBmi();
john.calcBmi();
console.log(mark.bmi, john.bmi);
getWinner();

// For loop and iterations
for (let i = 0; i <= 10; i++) {
  console.log(`For loop begins @ ${i}`);
}

// const numbers = [1,2,3,4,5,6,7,8,9,10,true];
// const types = [];

// for(let i = 0; i < numbers.length; i++) {
// console.log(numbers[i]);

// types[i] = typeof numbers[i];

// }

const numbers = [1, 2, true, 3, 4, 5, true, 6, 7, 8, 9, 10, true];
const types = [];

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] !== `number`) break;

  console.log(numbers[i]);

  types[i] = typeof numbers[i];
}

console.log(types);

const days = [20, 30, 40, 80];
const data = [];

for (let i = 0; i < days.length; i++) {
  data.push((100 - days[i]) / 2);
}

console.log(data);

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] !== `number`) break;

  console.log(numbers[i]);

  types[i] = typeof numbers[i];
}

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === `number`) break;

  console.log(numbers[i]);

  types[i] = typeof numbers[i];
}

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] !== `boolean`) break;

  console.log(numbers[i]);

  types[i] = typeof numbers[i];
}
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === `number`) continue;

  console.log(numbers[i]);

  types[i] = typeof numbers[i];
}
// REVERSE LOOP
const trueData = [`Tunbosun`, 32, true, 100];
const empty = [];

for (let i = trueData.length - 1; i >= 0; i--) {
  console.log(trueData[i]);
}

//LOOP IN A LOOP
for (let z = 1; z < 5; z++) {
  console.log(`starting job ${z}`);

  for (let i = 1; i < 8; i++) {
    console.log(`job  getting done ${i}`);

    for (let i = 0; i < 7; i++) {
      console.log(`done ${i}`);
    }
  }
}

//WHILE LOOP
let z = 1;
while (z <= 20) {
  console.log(`starting job ${z}`);
  z++;
}

//WHILE LOOP IN A WHILE LOOP
let y = 1;
while (y <= 20) {
  console.log(`starting job ${y}`);
  y++;

  let x = 1;
  while (x <= 5) {
    console.log(`done ${x}`);
    x++;
  }
}
//ROLLING DICE WITH WHILE LOOP
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You Win! (${dice})`);
}

//CODING CHALLENGE 4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  total.push(tip + bill[i]);
}
console.log(bill, tips, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(bill));
console.log(calcAverage(tips));
console.log(calcAverage(total));

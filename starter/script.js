let js = "amazing";
if (js === "amazing") alert("Welcome to JavaScript");

let firstName = "Olatunbosun";
console.log(firstName);
console.log(firstName);
console.log(typeof "hello");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof null);

let year;
console.log(year);
console.log(typeof year);

// let, var, const;
// math operators
let anage = 2022;
anage = 2024;
const ageTunbosun = anage - 1998;
const ageJoe = anage - 1996;
console.log(ageTunbosun, ageJoe);
console.log(ageTunbosun * ageJoe);
console.log(ageTunbosun % ageJoe);
console.log(ageTunbosun / ageJoe);
console.log(ageTunbosun + ageJoe);
console.log(ageTunbosun ** ageJoe);

// assignment operators
let x = 10 + 10;
x += 10;
x -= 10;
x *= 10;
x /= 10;
x %= 10;
x++;
x--;
console.log(x);

// comparison operators
console.log(ageTunbosun > ageJoe);
console.log(ageTunbosun < ageJoe);
console.log(ageTunbosun >= ageJoe);
console.log(ageTunbosun <= ageJoe);
console.log(ageTunbosun != ageJoe);
console.log(ageTunbosun == ageJoe);
console.log(ageTunbosun === ageJoe);

// TEST 1
let mass = 78;
let height = 1.69;
bmi = mass / (height * height);
// For Mark
let marksBmi = bmi;
console.log(marksBmi);
// For John 
mass = 92;
height = 1.95;
bmi = mass / (height * height);
let johnsBmi = bmi;
console.log(johnsBmi);

const markHigherBmi = marksBmi > johnsBmi;
console.log(markHigherBmi);

if (marksBmi > johnsBmi){
    console.log(`Mark has a higher BMI (${marksBmi})
    than John (${johnsBmi})`);
}else{
    console.log(`I don't know about it...`)
}

// TEST 2
let newMass = 95;
let newHeight = 1.88;
bmi = newMass / (newHeight * newHeight);
// For Mark 2
let marksNewBmi = bmi;
console.log(marksNewBmi);
// For John 
newMass = 85;
newHeight = 1.76;
bmi = newMass / (newHeight * newHeight);
let johnsNewBmi = bmi;
console.log(johnsNewBmi);

const markNewHigherBmi = marksNewBmi > johnsNewBmi;
console.log(markNewHigherBmi);

if (marksNewBmi > johnsNewBmi){
    console.log(`Mark has a new higher BMI (${marksNewBmi})
    than John (${johnsNewBmi})`);
}else{
    console.log(`Mark has a lower BMI (${marksNewBmi})
    than John (${johnsNewBmi})`);
}



// Template Literals
const fName = "Olatunbosun";
const birthYear = 1998;
const newYear = 2022;
const age = newYear - birthYear;
const data = `I'm ${fName} and I'm ${age} years old!`;

console.log(data);
console.log(`Backtick is awesome...`);
console.log(`this is 
actually very
dope
or what do you think lorem ipsum....`);

// conditional statements if/else if/else

let rate = 200;
let isNewRate = rate === 500;
let isOldRate = rate < 190;

if (isOldRate){
    console.log(`Rate is within the range of 190-${rate} dollars`);
}else if (isNewRate) {
    console.log(`Rate is now above ${rate} dollars`);
}else {
    console.log(`Rate is still ${rate}💲`);
}

const maxHeight = 50

let category;
if (maxHeight >= 6){
    category = `Giant`;
} else {
    category = `Dwarf`;
}

console.log(category);

// Type conversion and coercion

const inputYear = `2002`
console.log(Number(inputYear) + 28);

const outputYear = 2030
console.log(String(outputYear) + ` Another year`);

let n = `1`  +  1;
n -= 1;
console.log(n);

// 5 falsy values : 0, Null, NaN, '', false

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

const money = [];
if (money) {
    console.log("Don't spend it all");
} else {
    console.log(`you should get a job`);
}

const favoriteNumber = Number(prompt(`what year were you born`));
console.log(favoriteNumber);

const favoriteNum = prompt(`what year were you born`);
console.log(Number(favoriteNum));

if (favoriteNumber === 1998 || favoriteNumber === 1999 ){
    console.log(`You are ${2022 - [favoriteNumber]} years old!`);
} else if (favoriteNumber === 1999) {
    console.log(`You are ${2022 - favoriteNumber} years old!`)
} else {
    console.log (`You should input a year...`)
}

// logical operators
const java = true;
const script = false;

// console.log(java && script)
// console.log(java || script)
// console.log(java && script)
// console.log(!java && script)
// console.log(java || !script)
// console.log(!java && !script)
// console.log(!java || !script)

const javascript = java || script
if (javascript) {
    console.log(`Nice Programming Language!!!!`);
} else {
    console.log(`Why not Js`);
}

// challenge
const dolphinAverage = (96 + 108 + 89) / 3;
const koalaAverage = (88 + 91 + 110) / 3;

console.log(dolphinAverage, koalaAverage);

if (dolphinAverage > koalaAverage){
    console.log(`Dolphins are the greatest!!!!`);
} else if (dolphinAverage < koalaAverage){
    console.log(`Koalas are the greatest!!!`);
}else {
    console.log(`it is a tie...`);
}

// TEST 2
const dolphinsBonus = (97+112+101)/3;
const koalasBonus = (109+95+123)/3;

console.log(dolphinsBonus, koalasBonus);
const checkA = dolphinsBonus > koalasBonus && dolphinsBonus >= 100;
const checkB = koalasBonus > dolphinsBonus && koalasBonus >= 100;

if (checkA){
    console.log(`cool cool Dolphins!`);
} else if (checkB){
    console.log(`cool cool Koalas!`);
} else {
    console.log(`no winner....`);
} 

// TEST 3

const dolphinsSecondBonus = (97+112+101)/3;
const koalasSecondBonus = (109+95+106)/3;

console.log(dolphinsSecondBonus, koalasSecondBonus);
const checkAA = dolphinsSecondBonus > koalasSecondBonus && dolphinsSecondBonus >= 100;
const checkBB = koalasSecondBonus > dolphinsSecondBonus && koalasSecondBonus >= 100;

if (checkAA){
    console.log(`cool cool Dolphins again!`);
} else if (checkBB){
    console.log(`cool cool Koalas again!`);
} else {
    console.log(`no winner....`);
} 

const day = `wednesday`

switch (day) {
    case `monday`:
        console.log(`F*ck! its monday`);
        break;
    case `tuesday`:
    case `wednesday`:
    case `thursday`:
    case `friday`:
        console.log(`work work work`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`it is weekend!!!`)
        break;
    default:
        console.log(`not a day!!!, maybe midnight`);
        break;
}
// Tenary Operators 

const myAge = 24;
age >= 25 ? console.log(`I'm not your mate!`) :
console.log (`well, we can be friends...`);

const game = `game` === `game` ? `truth` : `dare`;
console.log(game);

console. log (`I pick ${`game` === `game` ? `truth` : `dare`}`)

// CODING CHALLENGE 4

const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`bill is ${bill}, tip is ${tip} 
and total bill is ${bill + tip}`);

const billTwo = 40
const tipTwo = billTwo <= 300 && billTwo >= 50 ? billTwo * 0.15 :
billTwo * 0.2;
console.log(`bill is ${billTwo}, tip is ${tipTwo} 
and total bill is ${billTwo + tipTwo}`);

const billThree = 430
const tipThree = billThree <= 300 && billThree >= 50 ? billThree * 0.15 :
billThree * 0.2;
console.log(`bill is ${billThree}, tip is ${tipThree} 
and total bill is ${billThree + tipThree}`);







"use strict";
// Code
// let age = 90;
const userName = "Andres";
// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }
// if (age > 20) {
//     let isOld = true;
// }
// let is block variable instead of var (global variables)
// console.log(isOld);
const add = (a, b) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5, 2));
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
const person = {
    firstName: "max",
    age: 20
};
const copiedPerson = Object.assign({}, person);
// Rest Parameters
const secondAdd = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const result = secondAdd(3, 4, 5, 6, 7);
console.log(result);
// Array & object destructuring
const [hobbie1, hobbie2, ...remainingHobbies] = hobbies;
const { firstName, age } = person;
//# sourceMappingURL=app.js.map
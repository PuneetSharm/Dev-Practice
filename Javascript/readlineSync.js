/**
 * readlineSync 
 */

let readlineSync= require("readline-sync");
let userName = readlineSync.question("Please enter your Name : ");
let userAge = readlineSync.question("Please enter your age : ");
let yearOfBirth= 2023 - Number(userAge);
console.log(`Welcome to Heaven ${userName}
You were born in ${yearOfBirth}`);
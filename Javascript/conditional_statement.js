/**
 * A program that reads 3 strings and prints the smallest string.
 * before running this code, run the command "npm i readline-sync" to install readline-sync package.
 */
// const string1 = "Maths";
// const string2 = "Physics";
// const string3 = "Chemistry";
const readlineSync = require("readline-sync");
const string1 = readlineSync.question("Please enter the first string : ");
const string2 = readlineSync.question("Please enter the second string : ");
const string3 = readlineSync.question("Please enter the third string : ");

if(string1.length === string2.length && string1.length === string3.length){
    console.log(`${string1}, ${string2}, ${string3} are equal`); 
}
else if(string1.length <= string2.length && string1.length <= string3.length){
     if(string1.length===string2.length){
        console.log(`${string1} and ${string2} are equal.`);
    }
    else if(string1.length===string3.length){
        console.log(`${string1} and ${string3} are equal.`);
    }
    else{
        console.log(`${string1} is the smallest string.`);
    }
}
else if(string2.length <=string3.length){
    if(string2.length === string3.length){
        console.log(`${string2}, ${string3} are equal`);
    }
    else{
        console.log(`${string2} is the smallest string`);
    }
}
else{
    console.log(`${string3} is the smallest string`);
}



// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const name = "Christy";
let age = 44;
let parent = true;
let no;
let number = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof name, typeof age, typeof parent, typeof no, typeof number);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let greeting = `"Hello my name is ${name}. I amd ${age} and have 3 dogs and 1 cat."`;
// reassign the value of the variable that references "null"
let number = 12;
// print the value and its type
console.log(typeof number);
// print a variable that causes a ReferenceError
grass = green;
// alter the previous line to no longer cause a ReferenceError
let grass = "green";

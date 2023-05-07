//Write a js program to replace first occurrence of a character with another in a string.
let str = "usama butt";
let searchChar = "m";
let replaceChar = "w";
let index = str.indexOf(searchChar);
if(index !== -1){
    str = str.slice(0,index)+replaceChar+str.slice(index+1);
};
console.log(`Replace the first occurance in the string is ${str}`);














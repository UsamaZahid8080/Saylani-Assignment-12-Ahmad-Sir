//Write a js program to replace last occurrence of a character with another in a string.
let str = "usama butt";
let searchChar = "u";
let replaceChar = "m";
let index = str.lastIndexOf(searchChar);
if(index !== -1){
    str = str.slice(0,index)+replaceChar+str.slice(index+1);
};
console.log(`Replace last occurance in the string is ${str}`);















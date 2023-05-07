//Write a js program to remove all occurrences of a character from string.
function removeAllChar(str,char){
    return str.split(char).join("");
};
let str = "usama butt";
let char = "a";
console.log(`Remove all occurance in the string is ${removeAllChar(str,char)}`);












//Write a js program to remove all extra blank spaces from given string.
function removeExtraSpaces(str){
    return str.replace(/\s+/g, " ").trim();
};
let str = "I    M     Usama    BUtt";
console.log(`Remove all extra spaces in the string is ${removeExtraSpaces(str)}`);




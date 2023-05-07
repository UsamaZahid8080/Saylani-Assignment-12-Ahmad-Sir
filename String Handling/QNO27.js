//Write a js program to replace all occurrences of a character with another in a string.
let str = "usama butt";
let oldChar = "a";
let newChar = "m";
let newStr = "";
for(let i = 0;i < str.length;i++){
    if(str[i] === oldChar){
        newStr += newChar;
    }else{
        newStr += str[i];
    }
};
console.log(`Replace all ocuurance character in the string is ${newStr}`);

















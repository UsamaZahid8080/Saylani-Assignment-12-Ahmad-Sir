//Write a js program to remove last occurrence of a character from string.
function removeLastChar(str,char){
    let index = str.lastIndexOf(char);
    if(index === -1) return str;
    return (str.slice(0,index)+str.slice(index+1));
};
let str = "usama butt";
let char = "a";
console.log(`Remove the last occurance in the string is ${removeLastChar(str,char)}`);

















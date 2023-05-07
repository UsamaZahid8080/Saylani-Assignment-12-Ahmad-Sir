//Write a js program to remove first occurrence of a character from string.
function removeFirstChar(str,char){
    let index = str.indexOf(char);
    if(index===-1) return str;
    return (str.slice(0,index)+str.slice(index+1));
};
let str = "usama butt"
let char = "a"
console.log(`The removed the first occurance in the string is ${removeFirstChar(str,char)}`);















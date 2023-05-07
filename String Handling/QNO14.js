//Write a js program to find first occurrence of a character in a given string.
function findFirstOccurance(str,char){
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            return i;
        }
    }
    return -1;
};
let myStr = "Usama Butt";
let myChar = "B";
console.log(`The occurance of the string is ${findFirstOccurance(myStr,myChar)}`);







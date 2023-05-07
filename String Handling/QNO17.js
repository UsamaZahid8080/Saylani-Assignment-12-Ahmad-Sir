//Write a js program to count occurrences of a character in given string.
function countOccurance(str,char){
    let count = 0;
    for(let i = 0;i < str.length;i++){
        if(str[i]===char){
            count++;
        }
    }
    return count;
};
let str = "Usama Butt Zahid Butt";
let char = "a";
console.log(`The counts of string occurance character is ${countOccurance(str,char)}`);















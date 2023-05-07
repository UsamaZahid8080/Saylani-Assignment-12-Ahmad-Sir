//Write a js program to search all occurrences of a character in given string.
function allOccurance(str,char){
    let occurrences = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            occurrences.push(i);
        }
    }
    return occurrences; 
};
let str = "Usama Butt Zahid Butt";
let char = "a";
console.log(`The all occurance in the string is ${allOccurance(str,char)}`);












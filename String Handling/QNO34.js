//Write a js program to remove all occurrence of a word in given string.
function removeWord(str,word){
    let regex = new RegExp(word,"g");
    let newStr = str.replace(regex,"");
    return newStr;
};
let str = "the machine the car the bike";
let word = "the";
console.log(`remove all occurence in the string is ${removeWord(str,word)}`);
//Write a js program to find last occurrence of a word in a given string.
function findLastOccurance(str,word){
    return str.lastIndexOf(word);
};
const myString = "The quick brown fox jumps over the lazy dog fox.";
const myWord = "fox";
console.log(`The last occurance of the word in the string is ${findLastOccurance(myString,myWord)}`);




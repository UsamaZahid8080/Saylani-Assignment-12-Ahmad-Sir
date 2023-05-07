//Write a js program to count total number of words in a string.
function countWords(str){
    str = str.trim();
    let words = str.split(/\s+/);
    return words.length;
};
console.log(`Total words in the string is ${countWords("i m usama Butt")}`);














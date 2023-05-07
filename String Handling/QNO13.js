// Write a js program to reverse order of words in a given string
function reverseWords(str){
    let words = str.split(" ").reverse().join(" ");
    return words;
};
console.log(`The reverse words of a string is ${reverseWords("Usama Butt Zahid Butt")}`);



//Write a js program to search all occurrences of a word in given string.
function findAllOccurrences(str, word){
    let words = str.split(" ");
    let position = [];
    for(let i = 0; i < words.length;i++){
        if(words[i].toLowerCase() === word.toLowerCase()){
            position.push(i);
        }
    }
    return position;
};

let str = "I m usama Butt I m 27 years old i m elder of my all siblings";
let word = "I";
console.log(`The occurence of all words in the string is ${findAllOccurrences(str,word)}`);
    


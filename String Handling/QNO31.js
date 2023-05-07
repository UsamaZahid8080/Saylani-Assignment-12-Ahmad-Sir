//Write a js program to count occurrences of a word in a given string.
function countOccurrences(str, word){
    let words = str.split(" ");
    let count = 0;
    for(let i = 0; i < words.length;i++){
        if(words[i].toLowerCase() === word.toLowerCase()){
            count++;
        }
    }
    return count;
};
const str = 'the quick brown fox jumps over the lazy dog';
const word = 'the';
console.log(`Count of all occurences words in string is ${countOccurrences(str,word)};`);

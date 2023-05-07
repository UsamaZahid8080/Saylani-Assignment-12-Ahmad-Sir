//Write a js program to remove last occurrence of a word in given string.
function removeLastOccurence(str,word){
    let index = str.lastIndexOf(word);
    if(index === -1){
        return str;
    }
    return str = str.slice(0,index)+str.slice(index+word.length);
};
let str = "the quick brown fox jumps over the lazy dog";
let word = "the";
console.log(`Remove last occurence of word in the string is ${removeLastOccurence(str,word)}`);
//Write a js program to remove first occurrence of a word from string.
function removeFirstOccurence(str,word){
    let index = str.indexOf(word);
    if(index === -1){
        return str;
    }
    return str = str.slice(0,index)+str.slice(index+word.length);
};
let str = "The quick brown fox jumps over the lazy dog";
let word = "jumps";
console.log(`Remove first occurence in the string is ${removeFirstOccurence(str,word)}`);


//Write a js program to trim trailing white space characters from given string.
function trimTrailingSpace(str){
    return str.replace(/\s+$/, '');
};
let string = "I M Usama     ";
console.log(`The trim trailing space in the string is ${trimTrailingSpace(string)}`);


//Write a js program to trim leading white space characters from given string.
function trimStrSpace(str){
    return str.replace(/^\s+/, "");
};
let string = "         I m usama      ";
console.log(`Trim the leading space in the string is ${trimStrSpace(string)}`);

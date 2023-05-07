//Write a js program to find reverse of a string.
function reverseStr(str){
    let chars = str.split('');
    let reverse = chars.reverse();
    let JoinStr = reverse.join('');
    return JoinStr; 
}
console.log(`The Reverse of the string is ${reverseStr("Usama Butt")}`);














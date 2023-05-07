//Write a js program to check whether a string is palindrome or not.
function isPalindome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
};
console.log(`This String is Palindrome ${isPalindome("usaasu")}`);
















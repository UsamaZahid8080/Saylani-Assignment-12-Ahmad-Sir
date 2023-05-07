//Write a js program to find total number of alphabets, digits or special character in a string.
function countChars(str){
    let countALphabet = 0;
    let countDigits = 0;
    let countSpecialCharacter = 0;
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(/[a-zA-Z]/.test(char)){
            countALphabet++;
        }else if(/[0-9]/.test(char)){
            countDigits++;
        }else{
            countSpecialCharacter++;
        }
    }
    return{
        Alphabet: countALphabet,
        Digits:countDigits,
        SPecialCharacter:countSpecialCharacter
    }
};
console.log(countChars("I M Usama 123"));


















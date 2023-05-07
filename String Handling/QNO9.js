//Write a js program to count total number of vowels and consonants in a string.
function countVowelsConsonants(str){
    let countVowels = 0;
    let countConsonant = 0;
    let vowels = "aeiouAEIOU";
    for(let i =0; i < str.length;i++){
        let char = str.charAt(i);
        if(vowels.includes(char)){
            countVowels++;
        }else if(char.match(/[a-z]/i)){
            countConsonant++;
        }
    }
    return{
        vowels:countVowels,
        consonant:countConsonant,
    }
};
console.log(countVowelsConsonants("I m usama"));














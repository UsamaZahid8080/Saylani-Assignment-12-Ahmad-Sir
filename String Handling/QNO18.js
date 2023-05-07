//Write a js program to find highest frequency character in a string.
function highestFrequency(str){
    let freq = {};
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(freq[char]){
            freq[char]++;
        }else{
            freq[char]= 1;
        }
    }
    let maxChar = null;
    let maxFreq = 0;
    for(char in freq){
        if(freq[char]>maxFreq){
            maxChar = char;
            maxFreq = freq[char];
        }
    }
    return maxChar;
};
console.log(`The highest frequency in the string is ${highestFrequency("Usama BUtt Zahid Butt")}`);
















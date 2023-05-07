//Write a js program to find lowest frequency character in a string.
function lowestFrequency(str){
    let freq = {};
    for(let i = 0; i < str.length;i++){
        let char = str.charAt(i);
        if(freq[char]){
            freq[char]++;
        }else{
            freq[char] = 1;
        }
    }
    let minChar = null;
    let minFreq = Number.MAX_SAFE_INTEGER;
    for(let char in freq){
        if(freq[char]<minFreq){
            minChar = char;
            minFreq = freq[char];
        }
    }
    return minChar;
};
console.log(`The lowest frequency in the string is ${lowestFrequency("usama Butt Zahid Butt")}`);

















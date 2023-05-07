//Write a js program to count frequency of each character in a string.
function countCharacterFrequency(str){
    let freq = {};
    for(let i = 0; i<str.length;i++){
        let char = str.charAt(i);
        if(freq[char]){
            freq[char]++;
        }else{
            freq[char]=1;
        }
    }
    return freq;
};
console.log(countCharacterFrequency("Usama Butt"));















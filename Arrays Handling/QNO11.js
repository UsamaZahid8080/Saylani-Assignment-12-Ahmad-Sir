//. Write a js program to count frequency of each element in an array.
function findFrequency(arr){
    let freq = {};
    for(let i = 0;i<arr.length;i++){
        let key = arr[i];
        if(freq[key]){
            freq[key]++;
        }else{
            freq[key]=1;
        }
    }
    return freq;
};
let arr = [1,2,3,2,3,4,6,5,3,2,3,4,6];
let result = findFrequency(arr);
console.log(result);




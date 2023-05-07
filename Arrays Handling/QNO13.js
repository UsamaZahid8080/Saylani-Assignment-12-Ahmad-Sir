//write a js program to count total number of duplicate elements in an array.
function countDuplicate(arr){
    let duplicate = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                duplicate++;
            }
        }
    }
    return duplicate;
};
let arr = [1,1,2,2,3,3,4,4,5];
let result = countDuplicate(arr);
console.log(`Total counts of dublicate elements in array is ${result}`);






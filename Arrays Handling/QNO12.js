//Write a js program to print all unique elements in the array.
function printUnique(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
};
let arr = [1,2,3,4,5,6,5,4,3,2,1];
let result = printUnique(arr);
console.log(`Print All unique elements in the array is ${result}`);














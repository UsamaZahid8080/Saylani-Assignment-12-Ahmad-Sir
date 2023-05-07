//Write a js program to merge two array to third array.
function mergeArrays(arr1,arr2){
    let newArray = [];
    newArray = newArray.concat(arr1,arr2);
    newArray.sort(function(a,b){
        return a-b;
    });
    return newArray;
};
let arr1 = [1,3,5];
let arr2 = [2,4,6];
let result = mergeArrays(arr1,arr2);
console.log(`The result merge of two array is ${result}`);






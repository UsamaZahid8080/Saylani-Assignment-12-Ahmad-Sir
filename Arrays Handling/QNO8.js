//Write a js program to copy all elements from an array to another array.
function copyArray(arr){
    let newArray = [];
    for(let i = 0; i < arr.length;i++){
        newArray.push(arr[i]);
    }
    return newArray;
};
let arr = [1,2,3,4,5,6,7];
let result = copyArray(arr);
console.log(`The copy of Array's elements is ${result}`);







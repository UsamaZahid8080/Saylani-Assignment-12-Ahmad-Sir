//Write a js program to search an element in an array.
function findElements(arr,element){
    for(let i = 0; i < arr.length;i++){
         if(arr[i]===element){
        return true;
        }
    }
    return false;
};
let arr = [1,2,3,4,5,6,7,8];
let element = 4;
let result = findElements(arr,element);
console.log(`The search elements in the array is ${result}`);





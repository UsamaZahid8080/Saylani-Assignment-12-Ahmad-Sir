//Write a js program to delete an element from an array at specified position.
function deleteElements(arr,index){
    arr.splice(index,1);
    return arr;
};
let arr = [1,2,3,4,5,6,7];
let index = 4;
let result = deleteElements(arr,index);
console.log(`Delete a specific elements in array's is ${result}`);





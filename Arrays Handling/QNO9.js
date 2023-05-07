//Write a js program to insert an element in an array.
function insertElements(arr,index,elements){
     arr.splice(index,0,elements);
    return arr;
};
let arr = [1,2,3,4,5,6,7];
let index = 3;
let elements = 9;
let result = insertElements(arr,index,elements);
console.log(`Inserst elements in array is ${result}`);






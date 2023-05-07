//Write a js program to right rotate an array.
function rightRotateArray(arr,position){
    for(let i = 0; i < position;i++){
        let temp = arr.pop();
        arr.unshift(temp);
    }
    return arr;
};
let arr = [1,2,3,4,5,6,7];
let position = 3;
let result = rightRotateArray(arr,position);
console.log(`The right rotate of an array is ${result}`);






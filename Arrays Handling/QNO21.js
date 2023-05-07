// Write a js program to left rotate an array.
function leftRotateArray(arr,position){
    for(let i = 0; i < position;i++){
        let temp = arr.shift();
        arr.push(temp);
    }
    return arr;
};
let arr = [1,2,3,4,5,6,7,8];
let position = 2;
let result = leftRotateArray(arr,position);
console.log(`The Left rotation of an array is ${result}`);




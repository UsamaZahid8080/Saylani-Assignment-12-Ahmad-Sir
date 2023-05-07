//. Write a js program to print all negative elements in an array.
function printNegativeElements(arr){
    let arr1 =[];
    for(let i = 0;i < arr.length;i++){
        if(arr[i]<0){
         arr1.push(arr[i]);
        }
    }
    return arr1;
};
let array = [-1,-2,-5,3,5,6];
console.log(`Print all negative elements in the array is ${printNegativeElements(array)}`);






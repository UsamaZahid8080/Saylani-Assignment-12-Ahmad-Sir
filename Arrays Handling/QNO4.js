//Write a js program to find maximum and minimum element in an array.\
function findMinMax(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]>max){
             max = arr[i];
        }
        if(arr[i]<min){
             min = arr[i];
        }
    }
    return [min,max];
};
let arr = [1,2,3,4,5,6,7];
let result = findMinMax(arr);
console.log(`Min:${result[0]}`);
console.log(`Max:${result[1]}`);








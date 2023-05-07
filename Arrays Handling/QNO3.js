//Write a js program to find sum of all array elements. 
function sumOfAllElements(arr){
    let sum =0;
    for(let i = 0;i <arr.length;i++){
        sum +=arr[i];
    }
    return sum;
};
let array = [1,2,3,4,5,6,7];
console.log(`The sum of all array's elements is ${sumOfAllElements(array)}`);
//Write a js program to find second largest element in an array.
function findSecondLargestNo(arr){
    let firstLargest = arr[0];
    let secondLargest = arr[0];
    for(let i = 1; i < arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }else if( arr[i]>secondLargest && arr[i]!==firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
};
let arr =[1,2,3,4,5,6,7];
let result = findSecondLargestNo(arr);
console.log(`The second largest no is ${result}`);











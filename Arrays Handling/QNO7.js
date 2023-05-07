//Write a js program to count total number of negative elements in an array.
function countNegativeElements(arr){
    let negativeCount = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i]<0){
            negativeCount++;
        }
    }
    return negativeCount;
};
let arr = [1,2,3,4,-6,-4,-3];
let count = countNegativeElements(arr);
console.log(`The negative elements counts ${count}`);






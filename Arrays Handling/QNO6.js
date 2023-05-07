//Write a js program to count total number of even and odd elements in an array.
function countEvenOdd(arr){
    let evenCount = 0;
    let oddCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2===0){
            evenCount++;
        }else{
            oddCount++;
        }
    }
    return{even: evenCount,odd:oddCount};
}
let arr = [1,2,3,4,5,6,7];
let count = countEvenOdd(arr);
console.log(`The even count is ${count.even}`);
console.log(`The odd count is ${count.odd}`);



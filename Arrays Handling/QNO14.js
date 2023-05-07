//Write a js program to delete all duplicate elements from an array.
function removeDuplicates(arr){
    for(let i = 0; i <arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i]===arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
};
let arr = [1,1,2,2,3,3,4,4,5,6];
let result = removeDuplicates(arr);
console.log(`Remove duplicates elements in the array is ${result}`);




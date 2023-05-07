//Write a js program to sort even and odd elements of array separately.
function sortEvenOddNumbers(arr){
    let even = [];
    let odd = [];
    for(let i =0; i < arr.length;i++){
        number = arr[i];
        if(number%2===0){
            even.push(number);
        }else{
            odd.push(number);
        }
        even.sort((a,b)=>a-b);
        odd.sort((a,b)=>a-b);
    }
    return {
        SortEvenNumbers:even,
        SortOddNumbers:odd
    }
};
let arr =[22,23,24,25,26,27,28,29,30,31,32];
let result = sortEvenOddNumbers(arr);
console.log(result);



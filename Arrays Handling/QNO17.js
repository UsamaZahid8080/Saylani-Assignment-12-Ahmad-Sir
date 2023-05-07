//Write a js program to put even and odd elements of array in two separate array.
function putEvenOdd(arr){
    let even = [];
    let odd = [];
    for(let i = 0; i < arr.length;i++){
        let elements = arr[i];
        if(elements % 2 === 0){
            even.push(elements);
        }else{
            odd.push(elements);
        }
        even.sort(function(a,b){
            return a -b;
        });
        odd.sort(function(a,b){
            return a -b;
        });
    }
    return {
        OddNumber:odd,
        EvenNumber:even,
    };
    
};
let arr = [1,2,3,4,5,6,7,6,5,4,3,2,2,1];
let result = putEvenOdd(arr);
console.log(result);




//Write a js program to sort array elements in ascending or descending order.
let number = [1,2,3,4,3,2,12,3,4,6,7];
number.sort((a,b)=>a-b);
console.log(`Sorted in ascending order ${number}`);
number.sort((a,b)=>b-a);
console.log(`Sorted in descending order ${number}`);

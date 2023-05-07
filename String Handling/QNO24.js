//Write a js program to remove all repeated characters from a given string.
function removeDuplicate(str){
    let result = "";
    for(let i = 0;i<str.length;i++){
        if(result.indexOf(str[i])===-1){
            result+=str[i];
        }
    }
    return result;
};
console.log(`Remove all repeated character in the string is ${removeDuplicate("hello")};`);
  
  












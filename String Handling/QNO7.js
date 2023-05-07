//Write a js program to toggle case of each character of a string.
function toggleCase(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(char === char.toLowerCase()){
            result += char.toUpperCase();
        }else{
            result += char.toLowerCase();
        }
    }
    return result;
}
console.log(`The ToggleCase of The String is ${toggleCase("Usama BUtt")}`);














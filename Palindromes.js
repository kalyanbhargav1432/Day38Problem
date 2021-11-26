function checkPalindromes(num1, num2){
    let temp = 0, remainder;
    let a = num1;
    while(a > 0){
        remainder = a % 10;
        a = parseInt(a / 10);
        temp = temp * 10 + remainder;
    }
    if(temp == num2){
        console.log(num1 + " and " + num2 + " are Palindromes");
    }else{
        console.log(num1 + " and " + num2 + " are not Palindromes");
    }
}

const prompt = require("prompt-sync")();
let num1 = prompt("Enter value");
let num2 = prompt("Enter a number");
checkPalindromes(num1, num2);
function getPalindrome(num1){
    let temp = 0, remainder;
    let a = num1;
    while(a > 0){
        remainder = a % 10;
        a = parseInt(a / 10);
        temp = temp * 10 + remainder;
    }
    return temp;
}

function checkPrime(number){
    let flag = 0;
    if(number == 1){
        console.log(number + " is neither prime not composite");
    }else{
        for(let i = 2; i < number; i++){
            if(parseInt(number) % parseInt(i) == 0){
                flag = 1;
            }
        }
        if(flag == 1){
            console.log(number + " is not a prime");
        }else{
            console.log(number + " is a prime");
        }
    }
}

const prompt = require("prompt-sync")();
let number = prompt("Enter a number");
checkPrime(number);
let reverseNumber = getPalindrome(number);
checkPrime(reverseNumber);
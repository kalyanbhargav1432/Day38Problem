console.log("Assume number between 1-100");
let value = 100;
let check = true;
while (check != false){
    const prompt = require("prompt-sync")();
    let choice = prompt("Enter 1.number = " + value + " 2.number < " + value + " 3.number > : " + value);
    if(choice == 1){
        console.log("Your number is : " + value);
        check = false;
    } 
    if(choice == 3){
        value = value + parseInt(value / 2);
    }
    if(choice == 2){
        value = parseInt(value / 2);
    }
}
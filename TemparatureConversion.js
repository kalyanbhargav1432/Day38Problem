function tempConversion(value){
    const prompt = require("prompt-sync")();
    const choice = prompt('Enter 1.Conversion from C to F 2.Conversion from F to C : ');
    let result;
    switch(choice){
        case 1:
            console.log("Conversion from C to F");
            if(value >= 0 && value <= 100){
                result = (parseFloat(value) * (9/5)) + 32;
            }else{
                console.log("Enter value between 0-100");
            }
            break;
        case 2:
            console.log("Conversion from F to C");
            if(value >= 32 && value <= 212){
                result = (parseFloat(value) - 32) * (5/9);
            }else{
                console.log("Enter value between 32-212");
            }
            break;
        default:
            console.log("Invalid choice");
    }
    console.log(value + " = " + result);
}

const prompt = require("prompt-sync")();
let value = prompt("Enter value");
tempConversion(value);
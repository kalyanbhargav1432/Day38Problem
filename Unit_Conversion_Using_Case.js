let c = 35;//feet value
let a = 12; //inches values
let d
let feet_To_Inch = 1;
let feet_To_Meter = 2;
let inch_To_Feet = 3;
let meter_To_Feet=4;
let option =4;
switch(option){
case 1:
    d =c*12;
    console.log(d+ " inch");
    break;
case 2:
        d =c*0.3048;
        console.log(d+ " Meter");
        break; 
case 3:
        d =a/12;
        console.log(d+ " Feet");
         break;  
case 4:
     d=a/.03048
    console.log(d+ " Feet"); 
    break;
}
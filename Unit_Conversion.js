// Converting inches into ft
let c = 12;
let a = 42; 
let b = a / c ;
console.log(a + " in = " + b + " ft");

//Rectangular Plot of 60 feet x 40 feet in meters
let d = 60;
let e = 40;
let f = 0.305;
let area = (d * f) * (e * f);
console.log("Area is : " + area + "sqm");

//Calculate area of 25 such plots in acres
let k = 25;
let total = k * area;
let s = 4047;
console.log("Area of " + k + " plots is " + (total / s) + " acres ");
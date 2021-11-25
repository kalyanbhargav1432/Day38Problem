let a = 5, b = 7, c = 2;
let d = a + b * c;
let e = c + a / b;
let f = a % b + c;
let g = a * b + c;

console.log("a + b * c is :" + d);
console.log("c + a / b is :" + e);
console.log("a % b + c is :" + f);
console.log("a * b + c is :" + g);

//Maximum
if(d > e && d > f && d > g){
    console.log(d + " is Maximum");
}else if(e > d && e > f && e > g){
    console.log(e + " is Maximum");
}else if(f > d && f > e && f > g){
    console.log(f + " is Maximum");
}else if(g > d && g > e && g > f){
    console.log(g + " is Maximum");
}
//Minimum
if(d < e && d < f && d < g){
    console.log(d + " is Minimum");
}else if(e < d && e < f && e < g){
    console.log(e + " is Minimum");
}else if(f < d && f < e && f < g){
    console.log(f + " is Minimum");
}else if(g < d && g < e && g < f){
    console.log(g + " is Minimum");
}

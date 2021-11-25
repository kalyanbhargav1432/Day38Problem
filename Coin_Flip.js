const HEAD = 0;
const TAIL = 1;

let random = Math.floor((Math.random()*10 )%2);
if(random == HEAD){
    console.log("Heads")
}else{
    console.log("Tails");
}

let p;
let q;
let n;

console.log("\n n    2 to power n      2 to power -n")
p = 1;
for (n = 2; n < 11; ++n) {
  if (n == 0)
    p = 1;
  else
    p = p * 2;
  q = 1.0 / p;
  
  console.log( n,"\t" + p + "\t" + "\t",+ q + " \t" + " \t");
}


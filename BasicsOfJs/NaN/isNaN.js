console.log(isNaN(NaN))

console.log(isNaN("shashank"))

console.log(isNaN(64))

// true
// true
// false

let a = NaN;
let b = "shashank"
let c = 20
let d = c - b

console.log(a,b,c,d);
//NaN shashank 20 NaN

console.log(d) //NaN

console.log((typeof(d)==='number' && isNaN(d)) ? "NaN value" : "Not NaN value");





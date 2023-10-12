/**
 * Four fundamental pillars of JS:
 *  i) Coercion  : Type interconversion.
 * ii) OOPs
 * iii) Asynchronus Property
 * iv) Scopes : 
 * 
 * 
 * Coercion : 
 * 
 */

console.log(1 + "1");
console.log(2 - "1");
console.log(1 - "1");
console.log("1" + "2");

/**
 * $ node coercion.js 
11
1
0
12
 */

console.log(1 - "a");
console.log(1 + "a");
console.log("a" - 1);
console.log("a" + 1);
console.log("b" - "a");

/**
NaN
1a
NaN
a1
NaN 
*/

/**
 * Ecmascript 2019 documentation will have type conversion answers.
 * 
 * Operator wise type conversio happens : 
 *      - Type conversion : 
 *      - 
 */

console.log(3/0);
console.log(true - 9);
console.log(true + 9);

/**
    Infinity
    -8
    10 
*/

console.log("12" + 3)
console.log("12 + 3")


console.log("12 + 3" + 3);
console.log("12 + 3" - 3);

// 123
// 12 + 3
// 12 + 33
// NaN

//valueOf function returning premitive value.
let a = 10 - {"a": 10 , valueOf(){return 8;}}

console.log(a); //2

//valueOf function returning non-premitive function.
let b = 10 - {"a": 10 , valueOf(){return {};}, toString(){return "5";}}

console.log(b); //5

let c = 10 - {"z": 10 , valueOf(){return "z";}}

console.log(c);


let d = 10 + {"z": 10 , valueOf(){return "z";}}

console.log(d); //10z

let x = {a:10};
console.log(x.a); //10

x.b = 10;
x.c = 30;
console.log(x); //{ a: 10, b: 10, c: 30 }


console.log({x:10, x:20}); //{ x: 20 }

let p = {"x":-1 , valueOf(){return p.x}};

console.log(10-p); //11




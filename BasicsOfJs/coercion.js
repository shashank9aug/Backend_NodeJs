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





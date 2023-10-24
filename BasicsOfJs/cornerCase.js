/** 
console.log(x); 
var x = 10;

output: Undefined => as Var -> Function scope -> 
*/

/**
console.log(x);
let x = 10;

Output: 
console.log(x);
            ^
ReferenceError: Cannot access 'x' before initialization

Reason: it says where ever you declare variable after that it'll
be accessible below that variable.
*/



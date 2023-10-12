console.log(null == undefined)
//true;

console.log(undefined == null)
//true;

console.log(10 == '10')
//true;
console.log(false == 0)
//true
console.log(true == 0)
//false

console.log(false == '1')
//false
console.log(false == '0')
//true

/**
 * if x = null and y = undefined 
 *  return true.
 * 
 * if x = undefined and y = null 
 *  return true.
 * 
 * if x = boolean and y = number/string 
 *  // x -> toNumber(x)
 *  if y = string
 *     ToNumber(y) == x; 
*/

console.log(10=={valueOf() {return 10}});
//true;

/**
 * ToPremitive({valueOf() {return 10}}) 
 *  -> hint : Number
 * -> 10 == 10 -> return true;
 */





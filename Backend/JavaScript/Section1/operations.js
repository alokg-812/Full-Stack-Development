/** 
 * 1. Assignment Operators (=)
 * 2. Arithmetic Operators (+,-,/,*,%, **)
 * 3. Increament or Decreament Operators (++, --(both post and pre))
 * 4. Comparison or Relational Operators (==, !=, ===, !==, >, <, >=)
 * 5. Logical Operators (or(||), and(&&), xor(^))
 * 6. Bitwise Operators (2-> 10, 3-> 11, ...)
 */

// 1. Assignment Operators (=)
var name = 'Alok' //Assignment operator using '=' symbol
console.log(name)
name = 'Alok Gupta' // Re-assignment of the variable name
console.log(name)


// 2. Arithmetic Operators (+,-,/,*,%, **)
console.log(4+5); //addition
console.log(4-5); // subtraction
console.log(4/5); // division
console.log(4*5); // multiplication
console.log(4%5); // reminder
console.log(4**5); //power


// 3. Increament or Decreament Operators (++, --(both post and pre))
var a = 1
console.log(++a); // increment operator
console.log(--a); // decrement operator
console.log(a++); // post increment operator
console.log(a--); // post decrement operator

// 4. Comparison or Relational Operators (==, !=, ===, !==, >)
console.log(5>3); // greater than
console.log(5<3); // less than
console.log(5==3); // equal to
console.log(5!=3); // not equal to
console.log(5===3); // strict equal to
console.log(5!==3); // strict not equal to
console.log(5>=3); // greater than or equal to
console.log(5<=3); // less than or equal to

// 5. Logical Operators (or(||), and(&&), xor(^))
console.log(5>3 && 5<10); // and operator
console.log(5>3 || 5<10); // or operator
console.log(true ^ true); // xor operator -> false when both are same
console.log(true ^ false); // xor operator -> true when both are different  
console.log(true && false); // and operator -> false when any one is false
console.log(true || false); // or operator -> true when any one is true

// 6. Bitwise Operators (2-> 10, 3-> 11, ...)
console.log(5 & 3); // bitwise and operator
console.log(5 | 3); // bitwise or operator
console.log(5 ^ 3); // bitwise xor operator
console.log(~5); // bitwise not operator
console.log(5 << 2); // left shift operator
console.log(5 >> 2); // right shift operator
console.log(5 >>> 2); // unsigned right shift operator
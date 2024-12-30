/**
 * var:
 * 1. var is used to define a variable
 * 2. var is function scoped, meaning it is available in the entire function, but no block scope
 * 3. var is hoisted, meaning it is moved to the top of the function
 */

// function f1(){
//     var i = 5;
//     console.log(i); 
// }
// console.log(i);
// f1();

{
    var j = 5; //no block scope
}
console.log(j);

/**
 * let:
 * 1. let is used to define a variable
 * 2. let is block scoped
 * 3. let is not hoisted
 */
console.log(i); // this will give error as let is not hoisted!

let i = 50;
console.log(i);

/** 
 * const:
 * 1. const is used to define a constant, they can't be reassigned any other values once assigned
 * 2. scope is same as let
 * 3. const is not hoisted
 * 4. const can't be reassigned, but the value of the variable can be changed if 
 */

const country = 'India';
console.log(country);
country = 'USA'; // this will give error as const can't be reassigned!

// const pie;
pie = 3.14;
console.log(pie); // this will give error as const is not hoisted!

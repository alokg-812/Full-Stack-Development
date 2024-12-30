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

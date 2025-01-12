/** 
 * Primitive:
 * 1. String : sequence of characters, defined with either '' or with ""
 * 2. Number : any numerical value
 * 3. bigint : Big integer numbers
 * 4. NaN :  Not a Number but of number datatype
 * 5. Null : itself is of null datatype but javascript has a bug of showing this as an object but they dont want to rectify this bug
 * 6. Undefined : variable is declared but not assigned any value
 * 7. Boolean : true or false
 * 8. Symbot : symbol(), constructor, symbol object, keys in objects because they are unique
 */
//string
var name = 'Alok' 
console.log(name);
console.log(typeof(name)); // how to know the datatype of the variable
console.log(typeof name); // how to know the datatype of the variable

// Number
var age = 25
console.log(age);
console.log(typeof(age)); 

// BigInt
var big_num = 100n;
console.log(big_num);
console.log(typeof(big_num));

/** 
 * Non Primitive
 * 1. Object : collection of key value pairs, keys->string or symbol, values-> can be of any datatype
 */

// Object
var person = {
    name: 'Alok',
    age: 20,
    hobby: "cricket"
};
console.log(person);
console.log(typeof(person)); // object

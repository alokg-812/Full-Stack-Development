/**
 * String:
 * 1. Sequence of characters
 * 2. Immutable
 */

let name = 'Alok'
console.log(name) // Alok

// indexing in the string is 0 based
console.log(name[0]) // A
/**
 * Properties of string:
 * 1. length
 * 2. toUpperCase
 * 3. toLowerCase
 * 4. trim
 * 5. split
 * 6. includes
 * 7. replace
 * 8. startsWith
 * 9. endsWith
 * 10. repeat
 */
//length of the string
console.log(name.length) // 4


//toUpperCase
console.log(name.toUpperCase()) // ALOK


//toLowerCase() converts the string to lowercase
console.log(name.toLowerCase()) // alok


//trim() removes the leading and trailing spaces from the string
console.log(name.trim()) // alok


//split() splits the string into an array of words
console.log(name.split('')) // ['A', 'l', 'o', 'k']


//includes() check whether the passed parameter is present inside the string or not
console.log(name.includes('l')) // true
console.log(name.includes('z')) // false


//replace() replaces the passed parameter with the new string
console.log(name.replace('A', 'a')) // alok


//startsWith() checks whether the string starts with the passed parameter or not
console.log(name.startsWith('A')) // true
console.log(name.startsWith('a')) // false


//endsWith() checks whether the string ends with the passed parameter or not
console.log(name.endsWith('k')) // true
console.log(name.endsWith('A')) // false


//repeat() repeats the string for the specified number of times
console.log(name.repeat(2)) // alokalok
console.log(name);

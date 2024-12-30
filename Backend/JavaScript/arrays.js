/**
 * Arrays:
 * 1. array is an ordered data structure
 * 2. order in array is maintained by their indices
 * 3. array is a collection of elements of the same or different data types
 * 4. array is a collection of elements which are stored in contiguous memory locations
 * 5. array in javascript is not any seperate data type, its type falls in the category of objects 
 * 
 */

arr1 = [1,2,3]
console.log(typeof arr1); //will give object and not array

arr2 = new Array(1,2) //another way of array creation
console.log(arr2);

/**
 * //arrays are mutable:
 * 1. push-> adds whatever value is in the bracket at the last of the array
 * 2. pop-> removes whatever value is in the bracket at the last of the array
 * 3. ushift method-> adds whatever value is in the bracket at the beginning of the array
 * 4. sgift-> removes whatever value is at the 0th index of the array
 * 5. splice-> removes whatever value is in the bracket at the specified index of the array
 * 6. sort-> sorts the array in ascending order
 * 7. reverse-> reverses the array
 * 8. concat-> concatenates two arrays
 * 9. join-> joins the array elements into a string
 * 10. map-> returns a new array with the results of applying a provided function on every element in the calling
 * 11. filter-> returns a new array with all elements that pass the test implemented by the provided function
 * 12. reduce-> applies a function against an accumulator and each element in the array (from left to right)
 * 13. every-> returns true if all elements in the array pass the test implemented by the provided function
 * 14. some-> returns true if at least one element in the array passes the test implemented by the provided function
 * 15. find-> returns the first element in the array that satisfies the provided testing function
 * 16. findIndex-> returns the index of the first element in the array that satisfies the provided testing function
 * 17. indexOf-> returns the first index of the element in the array
 * 18. lastIndexOf-> returns the last index of the element in the array
 * 19. includes-> returns true if the array includes the specified value
 * 20. flat-> returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
 * 21. flatMap-> returns a new array with all sub-array elements concatenated into it recursively up to the specified
 * 22. entries-> returns an array iterator allowing you to iterate over all key-value pairs in the array
 * 23. keys-> returns an array iterator allowing you to iterate over all keys in the array
 * 24. values-> returns an array iterator allowing you to iterate over all values in the array
 * 25. forEach-> calls a function on every element in the array
 */

//1. push()
arr1.push(4);
console.log(arr1); //will print [1,2,3,4]
arr1[2] = 20
console.log(arr1); //will print [1,2,20,4]
arr1.push(4,40);
console.log(arr1);

//2. pop()
arr1.pop();
console.log(arr1); //will print [1,2,20,4]

//3. ushift()
arr1.unshift(10);
console.log(arr1); //will print [10,1,2,20,4]

//4. shift()
arr1.shift();
console.log(arr1); //will print [2,20,4]

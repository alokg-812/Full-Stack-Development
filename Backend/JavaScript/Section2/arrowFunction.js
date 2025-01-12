// function with no parameters and no return value
var hello = () => console.log("Hello, World!" );
hello(); // Outputs: Hello, World!


// function with one parameter and no return value
var world = (name) => console.log(`Hello, ${name}!`);
world("John"); // Outputs: Hello, John!

// funciton with 2 parameters and return value
var sum = (a, b) => a + b;
console.log(sum(5, 10)); // Outputs: 15

// function with 2 parameters and return value and multiple lines of function body
var sum = (a, b) => {
    let result = a + b;
    return result;
}

console.log(sum(5, 10)); // Outputs: 15

// IIFE -> Immediately Invoked Function Expression
(function() {
    console.log("Hello, World!");
})(); // Outputs: Hello, World!

/**
 * Function Defining
 * Convention:
 * -> Function name is in camelCase
 * -> Function parameters are in camelCase
 * -> Function returns are in camelCase
 * -> Function description is in the comment block 
 * 
 * 
 */

function goodMorning(){
    console.log("Good Morning");
}

goodMorning(); // calling function only a time

for(var i = 0;i<5;i++){ //calling function muliple time
    goodMorning();
}

// function with parameters
function sum(a,b){ //a and b are parameters
    return a+b; // codes inside curly braces are block of code
}
console.log(sum(5,6)); // calling function with arguments passed


// function with parameters
function sum(a,b = 5){ //b is default parameter
    return a+b; // codes inside curly braces are block of code
}
console.log(sum(5)); // calling function with arguments passed

//argument object
function sum(){ //a,b,c are parameters
    console.log(arguments); //arguments object is passed to function
    // return a+b+c; // codes inside curly braces are block of code
}
sum(5,6,7); // calling function with arguments passed
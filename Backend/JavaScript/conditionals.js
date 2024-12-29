var num = 20;

// if
if(num%2 == 0){
    console.log(num + " is even");
}

// if-else
if(num%2 == 0){
    console.log(num + " is even");
}
else{
    console.log(num + " is odd");
}

//ternary -> one liner for an if-else condition
console.log(num%2 == 0 ? num + " is even" : num + " is odd");

//nested-conditionals
if(num%2 == 0){
    if(num%3 == 0){
        console.log(num + " is divisible by both 2 and 3");
    }
    else{
        console.log(num + " is divisible by 2 but not 3");
    }
}else{
    console.log(num + " is odd");
}

// switch
switch(num%2){
    case 0:
        console.log(num + " is even");
    case 1:
        console.log(num + " is odd");
}
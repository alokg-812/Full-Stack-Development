// Global Variables
// var name = 'Alok', age = 20 // both name and age are globaaly declared
console.log(name, age)  //Output: Alok 20

function print(){
    console.log(name, age);    
}
print();  //Output: Alok 20

// Local Scoped Variables
function printLocal(){
    console.log(name, age); // this will get error untill the varibales name and age would not be declared
}
printLocal();  //Output: Alok 20

function printLocal(){
    var name = 'Alok', age = 20 // both name and age are locally declared
    console.log(name, age);
}
printLocal();  //Output: Alok 20

// Block Scoped Variables
function printBlockScoped(){
    if(true){
        let name = 'Alok', age = 20 // both name and age are block scoped
        console.log(name, age);
    }
}
console.log(name, age); // will give error as name and age are defined locally using let keyword, if had defined using var keyword, it would have generated no error


printBlockScoped();  //Output: Alok 20

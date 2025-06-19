
const fn2 = () =>{
    console.log("I am in arrow function");
    
}

function fn(){
    console.log("I am in traditional function");
    console.log(fn2);    
    console.log(fn2());    
}

fn();
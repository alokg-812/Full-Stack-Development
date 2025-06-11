const users = {
    'name' : 'sachin',
    'age' : 52,
    'isMarried': true
}

console.log(Object.keys(users))

Object.keys(users).forEach((key)=>{
    console.log(`${key} : ${users[key]}`)
})

console.log(Object.keys(users).length)

Object.keys(users).forEach((key)=>{
    console.log(`${key} : ${users[key]}`)
})


Object.keys(users).forEach((key)=>{
    console.log(`${key} : ${users[key]} --type--> ${typeof(users[key])}`)
})

delete users.isMarried;

Object.keys(users).forEach((key)=>{
    console.log(`${key} : ${users[key]} --type--> ${typeof(users[key])}`)
})

delete users.salary;

if ("salary" in users){
    console.log("salary is present in users")
} else{
    console.log("salary not available");
    
}







// const [username, userage, usermarried] = Object.keys(users);
// console.log(username, userage, usermarried)
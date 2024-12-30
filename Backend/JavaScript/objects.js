const user1 = {
    name: 'Alok',
    age: 20,
    city: 'Bangalore'
}
//accessing the data
console.log(user1.name);
console.log(user1['age']);

//adding data to the object
user1.country = 'India';
user1['continent'] = 'Asia';
console.log(user1);

//deleting the data in an object
delete user1.continent;
console.log(user1);

let user2 = {
    name: 'Alok',
    age: 20,
    address:{
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India'
    }
}

//iterating over an object
for(let key in user2){
    console.log(key, '=>', user2[key]);
}

console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));

//cloning an object using assigned
let user3 = Object.assign({}, user2);
console.log(user3);

//cloning and adding extra key values to the cloned object:
let user4 = Object.assign({}, user2, { occupation: 'Software Engineer' });
console.log(user4);
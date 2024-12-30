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

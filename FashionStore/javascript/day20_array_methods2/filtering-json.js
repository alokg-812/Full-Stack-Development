users =[
    {
        userName : 'Sachin',
        userAge : 54,
        userGender : 'Male'
    },
    {
        userName : 'Dravid',
        userAge : 47,
        userGender : 'Male'
    },
    {
        userName : 'Dhoni',
        userAge : 43,
        userGender : 'Male'
    },
    {
        userName : 'kohli',
        userAge : 38,
        userGender : 'Male'
    },
    {
        userName : 'Rohit',
        userAge : 36,
        userGender : 'Male'
    }
];

console.log(users);
let userFilterData = users.filter(users => users.userAge<=40)
console.log(userFilterData);
let user = {
    'userName' : 'sachin',
    'age' : 51,
    'teams' : ['MI', 'INDIA'],
    'records' : {
        'centuries' : 100,
        'average' : 54.5,
        'Brand' : 'MRF'
    },
    'isCaptain' : true
}
console.log(user);
console.log(`Username is: ${user.userName}`);
console.log(`Age is: ${user.age}`);
console.log(`Teams is: `);
user.teams.forEach(function (teamName) {
    console.log(teamName);    
});
console.log(`Records is: `);
console.log(user.records.centuries);
console.log(user.records.average);
console.log(user.records.Brand);
console.log(`Was Captain or not: ${user.isCaptain}`);


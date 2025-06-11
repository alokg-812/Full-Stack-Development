const users = {
    'name' : 'sachin',
    'age' : 52,
    'isMarried': true,
    'salary' : 34567873
};

console.log(Object.values(users));

Object.values(users) => (for(const (keys,values) in users) {
    console.log(values);
})
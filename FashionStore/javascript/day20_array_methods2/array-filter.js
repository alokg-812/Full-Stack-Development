let arr = ['sachin', 'saurav', 'kohli', 'dhoni', 'yuvi'];
let namesArray = arr.filter(function(names){
    // console.log(names);            
    if(names.length > 5){
        return names;
    }
})
console.log(`Original array: '${arr}'`);
console.log(`Names > 5: '${namesArray}'`);

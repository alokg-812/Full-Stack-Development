let items = ["All","Electornics","mobiles","kidsFashion"];

items.forEach(function(item){
    console.log(item);
})

console.log("*************************")

items.forEach(function(item,index){
   console.log(`${index+1}.${item}`)
});

console.log("*************************")
items.forEach(function(item,index,arr){
    arr[index] = item.toUpperCase();
})

console.log(items);

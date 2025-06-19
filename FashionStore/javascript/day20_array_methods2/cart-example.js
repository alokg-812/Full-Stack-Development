let cart = [
    { id: 1, name: "Laptop", price: 60000, available: true},
    { id: 2, name: "Mouse", price: 1500, available: true},
    { id: 3, name: "Phone", price: 30000, available: false},
    { id: 4, name: "Headphones", price: 2000, available : true},
    { id: 5, name: "Keyboard", price: 8000, available: true},
    { id: 6, name: "USB Cable", price: 800, available: false}
];

console.log(cart);
let availableItems = cart.filter(item => item.available === true)
console.log(availableItems);

let totalCost = availableItems.reduce(function(total, item){
    return total + item.price;
}, 0);
console.log(totalCost);

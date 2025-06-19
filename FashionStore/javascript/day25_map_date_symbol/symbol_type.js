let product = {
    'id': 1,
    'brand': 'Samsung',
    'price': 45000,
    'size':35
};

console.log("****Before Privatization*****");

for (const key of Object.keys(product)) {
    console.log(key);
}

let ID = Symbol();

product.id = [ID];

console.log("****After Privatization*****");

for (const key of Object.keys(product)) {
    console.log(key);
}
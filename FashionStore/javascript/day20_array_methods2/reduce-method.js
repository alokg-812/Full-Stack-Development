let num = [1,2,3,4];
let totalValue = num.reduce(function (total, data) {
    console.log(total, data);
    return total+data;
}, 0)
console.log(totalValue);
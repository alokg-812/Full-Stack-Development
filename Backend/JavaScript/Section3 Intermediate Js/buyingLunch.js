function whosPaying(names){
    let num = names.length;
    let n = Math.floor(Math.random()*num);
    return (names[n] + " is going to buy lunch today!");
}

// Use the function to get the result
names = ['AG', 'APR', 'DG', 'RS', 'SS', 'US', 'ADS'];
console.log(whosPaying(names));
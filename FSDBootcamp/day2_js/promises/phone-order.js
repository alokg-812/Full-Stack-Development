function orderPhone() {
    return new Promise((resolve, reject) => {
        let stockAvailable = true;  // Try changing this to `false` to see rejection

        setTimeout(() => {
            if (stockAvailable) {
                resolve("Your phone has been shipped!");
            } else {
                reject("Sorry, the phone is out of stock.");
            }
        }, 2000);
    });
}

orderPhone()
    .then(message => console.log(message))
    .catch(error => console.log(error));
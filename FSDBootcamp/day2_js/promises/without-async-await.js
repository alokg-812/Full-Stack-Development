function makeTea() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Tea is ready!"), 2000);
    });
}

function makeToast() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Toast is ready!"), 1500);
    });
}

function makeEggs() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Eggs are ready!"), 3000);
    });
}

makeTea().then(console.log);
makeToast().then(console.log);
makeEggs().then(console.log);
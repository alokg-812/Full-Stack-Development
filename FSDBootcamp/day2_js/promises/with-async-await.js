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


async function makeBreakfast() {
    console.log("Starting breakfast...");

    let tea = await makeTea();
    console.log(tea);

    let toast = await makeToast();
    console.log(toast);

    let eggs = await makeEggs();
    console.log(eggs);

    console.log("Breakfast is ready!");
}

makeBreakfast();
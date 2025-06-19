function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(0);
        }, 2000);
    });
}

task1().then((value) => console.log("task1 result:", value));

task2()
    .then((value) => console.log("task2 result:", value))
    .catch((err) => console.log("task2 error:", err));

console.log("here");

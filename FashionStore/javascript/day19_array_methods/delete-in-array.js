//Delete operation : front_end, rear_end, at specified position
console.log("***************************************")
let teamNames = ['DC','RCB','Punjab','MI','CSK','GT','LSG','RR'];
console.log(teamNames);

teamNames.pop();
console.log(teamNames); // deletes the last element

teamNames.shift();
console.log(teamNames); // deletes the first element

teamNames.splice(3,1);
console.log(teamNames); // deletes the element at 3rd index

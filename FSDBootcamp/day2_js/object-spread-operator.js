const state = {
	fullscreen: false,
	isLoggedIn: false,
}

const newState = {
	...state, //get all the properties of state object
	isLoggedIn: true,
}

console.log(newState);
// console log
// {fullscreen: false, isLoggedIn: true}
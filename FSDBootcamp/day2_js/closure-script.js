function outer(){
	let a = 2;
	return function inner(){
		a++;
		console.log(a);
        }
}

const fn = outer();
fn();

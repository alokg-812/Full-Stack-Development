let str = 'sachinrameshtendulkar'
console.log(str.slice(6, -5));                  //rameshtend
console.log(str.slice(6, 16));                  //rameshtend
console.log(str.slice(NaN, NaN));               //
console.log(str.slice(null, null)); 		//
console.log(str.slice(undefined, undefined));   //sachinrameshtendulkar
console.log(str.slice(true, true));		//
console.log(str.slice(false, true));		//s
console.log(str.slice(0, true));		//s
console.log(str.slice(false, null));		//
console.log(str.slice(false, undefined));	//sachinrameshtendulkar
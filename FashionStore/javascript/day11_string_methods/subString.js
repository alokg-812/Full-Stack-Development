let str = 'sachinrameshtendulkar'
console.log(str.substring(6, -5));                  //sachi
console.log(str.substring(6, 16));                  //rameshtend
console.log(str.substring(NaN, NaN));               //
console.log(str.substring(null, null)); 		    //
console.log(str.substring(undefined, undefined));   //sachinrameshtendulkar
console.log(str.substring(true, true));		        //
console.log(str.substring(false, true));		    //s
console.log(str.substring(0, true));		        //s
console.log(str.substring(false, null));		    //
console.log(str.substring(false, undefined));	    //sachinrameshtendulkar
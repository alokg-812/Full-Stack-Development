let password='+91-9998887776';
let str=password.match(/^(?=.*[A-Z])\w{6,14}$/); //Array | null

if (str) {
    console.log('Strong password');
} else {
    if (password.length<5) {
        console.log('Weak password')
    } else {
        console.log('Poor password');
    }
}

let str1 = '9998887776';
let matchInput1 = /^\d{10}$/;
console.log(str1.match(matchInput1));

let str2 = '999888777';
let matchInput2 = /^\d{10}$/;
console.log(str2.match(matchInput2));

let str3 = '999888777676';
let matchInput3 = /^\d{10}$/;
console.log(str3.match(matchInput3));


let str4 = '999888777665';
let matchInput4 = /\d{10}/;
console.log(str4.match(matchInput4));


let str5 = '9998887776';
let matchInput5 = /^\d{10}$/;
console.log(str5.match(matchInput5));


let str6 = '9998887776';
let matchInput6 = /^\d{10}$/;
console.log(str6.match(matchInput6));


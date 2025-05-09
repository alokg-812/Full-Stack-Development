let amountInput = document.getElementById('amountInput');
let amountRange = document.getElementById('amountRange');
let timeInput = document.getElementById('timeInput');
let timeRange = document.getElementById('timeRange');
let interestInput = document.getElementById('interestInput');
let interestRange = document.getElementById('interestRange');
let emiResult = document.getElementById('emiResult');

amountInput.value = amountRange.value;
timeInput.value = timeRange.value;
interestInput.value = interestRange.value;

function calculateEMI(){
    let principal = parseInt(amountInput.value);
    let years = parseInt(timeInput.value);
    let rate = parseInt(interestInput.value);
    let months = years * 12;
    let emi = principal * rate * (Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    emiResult.innerHTML = `Your EMI Amount is <span style="color:red">${emi.toFixed(6)}</span> for <b>${months}</b> months.`;  
}

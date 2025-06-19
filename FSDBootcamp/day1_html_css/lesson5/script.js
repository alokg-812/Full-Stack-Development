document.getElementById("card1").style.backgroundColor = 'red';
document.getElementById("card2").style.backgroundColor = 'blue';
document.getElementById("card3").style.backgroundColor = 'green';
let counter = 0;
function changeColor(){
    counter++;
    if(counter%3 == 1){
        document.getElementById("card1").style.backgroundColor = 'blue';
        document.getElementById("card2").style.backgroundColor = 'green';
        document.getElementById("card3").style.backgroundColor = 'red';
    } else if(counter%3 == 2){
        document.getElementById("card1").style.backgroundColor = 'green';
        document.getElementById("card2").style.backgroundColor = 'red';
        document.getElementById("card3").style.backgroundColor = 'blue';
    }else{
        document.getElementById("card1").style.backgroundColor = 'red';
        document.getElementById("card2").style.backgroundColor = 'blue';
        document.getElementById("card3").style.backgroundColor = 'green';
        counter = 0
    }

    // setInterval(changeColor, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(changeColor, 500);
    changeColor();
});

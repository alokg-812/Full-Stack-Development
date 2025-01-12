// for loop-> mostly when termination condition is known
for(var i =0; i<10;i++){
    console.log(i+1);
}

// while loop-> mostly when termination condition is unknown
var j = 0;
while(j<10){
    console.log(i+1);
    j++;
}

//break and continue
//break-> used to terminate the loop
for(var i =0; i<10;i++){
    if(i==5){
        break; // terminated after i == 5
    }
    console.log(i);
}

//continue-> used to skip the current iteration and move to the next iteration
for(var i =0; i<10;i++){
    if(i==5){
        continue; // skipped at i == 5 only
    }
    console.log(i);
}
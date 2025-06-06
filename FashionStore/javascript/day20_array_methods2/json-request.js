// Javascript : Synchronous Single Thread Language
const URL = "../../../../data/user-data.json";
fetch(URL)
    .then(function(response){
        console.log(response.json());
        return response.json();
    }).then(function(user){
        console.log(user);
    }) .catch(function(error){
        console.log(error);
    })

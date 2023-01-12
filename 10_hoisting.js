console.log(city);

var city = "Pune"; // Hoisted elements var

city = "Pune";
console.log(city); 
var city;


let state = "MH";
console.log(state); // Not  Hoisted elements var

show();

function show(){
    console.log("Hello I am in show");
}

display();
var display = function(){
    console.log("Hello I am in display"); // Not  Hoisted  Function expression
}



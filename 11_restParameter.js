function show(name,  ...details){
    console.log(name, details);
}
show("Sachin", 45, "Mumbai", 101);

function display (...hero) {
    console.log(hero);
}
display("James Bond" , 50 ,"Mission Impossible" , 007);
display("Brad Pit" , 40 ,"Vampire Series" , 11 );

// Function with default argument value
console.log("Function with default argument value");
function sum(n1, n2=0){
    console.log(n1, n2);
    console.log(n1+n2); // 30
}
sum(10, 20);
sum(10);

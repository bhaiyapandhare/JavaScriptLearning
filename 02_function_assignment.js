
console.log(1);
function welcomeToJavaScript(){
    console.log("Welcome To JavaScript");
}
welcomeToJavaScript();

function aboutJava(){
    console.log("JavaScript is language of program");
}
aboutJava();

console.log(2);
function personalDetails(fristName, lastName, College){
    console.log("==Personal Details==");
console.log(fristName);
console.log(lastName);
console.log(College);
}
personalDetails("Maruti","Pandhare", "Fabtech Technical Campus");

console.log(3);
function swapValuesDude(Virat,Anushka){
console.log("#Before Swap#",Virat,Anushka);
var temp= Virat;
Virat= Anushka;
Anushka= temp;
console.log("#After Swpap#",Virat,Anushka);
}
swapValuesDude("Virat", "Anushka")

function swapValuesDude(val1,val2){
    console.log("#Before Swap#",val1,val2);
    var temp= val1;
    val1= val2;
    val2= temp;
    console.log("#After Swpap#",val1,val2);
    }
    swapValuesDude(1000,2000)

    console.log(4);
    function addThreeValues(val1, val2, val3){
        console.log("Before Adding", val1, val2, val3);

        console.log("After Adding", val1+val2+val3);
         return val1+val2+val3 ;
    }
    addThreeValues(10.23,600,40)
    function addThreeValues(val1, val2, val3){
        console.log("Before Adding", val1, val2, val3);

        console.log("After Adding", val1+ val2+ val3);
         return val1+ val2+ val3 ;
    }
    addThreeValues("Hello","Good","Morning")
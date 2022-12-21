console.log("==1==");
var square= function(num){
console.log("Square of number", num, num*num);
}
square(5);
square(6);
square(25);
square(100);
console.log("==2==");
var area= function(length,width){
    console.log("Area of Rectangle",'=',length*width);
} 
area(499,917);
console.log("==3==");
var swapValues= function(val1,val2){
    console.log("Before swap", val1,val2);
    var temp=val1;
    val1= val2;
    val2=temp;
    console.log("After swap", val1,val2);
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);
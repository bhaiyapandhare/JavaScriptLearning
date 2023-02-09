var global = `Ritesh`;
// function outer(){
//     var inner = "Sanket";
//     let ownVariable = function (){
//         var own = `Maruti`;
//         console.log(`The Global Var:`, global); 
//         console.log(`The inner var:`, inner ); 
//         console.log(`The own var:`, own); 

//     }
//     return ownVariable ;
// } 
//  let all = outer();
//  all();

 function show(){
    console.log(`I Love My Friends`);
 }
 function say_hello(show_fun){
    console.log(`Love Your GF`);
    show_fun();
 }

//  say_hello();
 say_hello(show)

 function outer (){
    console.log(`Maruti is good person`);
  return function(){
    console.log(`Sanket and Ritesh are Good Students`);
  }
}
outer()();


var glob = 400;
function out(){
let own= 500;

let inn = function(){
let inn = 600;
console.log(glob);
console.log(own);
console.log(inn);

}
return inn;

}
let all = out();
all();

console.log(`===== function can return another function=====`);
function outer() {
   console.log("Yes I love you");
   return function(){
      console.log("That's reason to marry you ");
   } 
}
outer()();

const arraystud =[ 1,"Suhas" ,2, "Rohit" ,3,"Ritesh" , 4 ,"Sanket", 5,"Maruti"];

console.log(arraystud);
console.log(...arraystud);

function arg(n1 , n2 , ...args) {
   console.log(n1 ,n2,args);
}
arg(3 ,4,8,84030,78,45)

console.log(`+++++ Obhect Destructuring`);
const pers= {
   name4 : "Vaishnavi",
   surname5 : "Arya",
   age : 18,
}
let {name4, surname5 , age , height=5.8} = pers
console.log(name4,  age ,height);


const det= {
   name4 : "Vaishnavi",
   surname5 : "Arya",
   age : 18,
}

const empK={
   n: "Komal",
   agek:25,
   sal:77000,
}
console.log(Object.assign({} , det)); // object cloning
 
const clonedDet= Object.assign({},det,empK); // merging object
console.log(clonedDet);

const set = new Set();
 set.add(11);
 set.add(7);
 set.add(3);
 set.add(1);
 set.add(27);
 set.forEach((currentValue,index,set)=>{
   console.log(currentValue ,index,set);
 })

 const map = new Map();
 map.set(1,"Komal");
 map.set(2,"Vaishnavi");
 map.set(3, "Sakshi");
 map.set(4,"Tanuja");

 map.forEach((no ,girls)=>{
console.log(no ,girls);
 })
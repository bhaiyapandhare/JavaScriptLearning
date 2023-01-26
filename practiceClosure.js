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

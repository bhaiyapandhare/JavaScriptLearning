let globalVariable = 100;
function outer(){ 
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log("Inner function");
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable); // inner outer global are global
    }
    return inner;
}

let returnValue = outer();  // outer function includes inner function 
returnValue();

//outer()(); // We can invoke inner function with like this too


function get(){
    return 100+100;
}
let s = get()+100;
console.log(s);
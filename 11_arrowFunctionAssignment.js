console.log(`===1===`);
let massage = ()=>{
    console.log("Good Morning , Today is Monday");
}
massage();

console.log(`===2 a.===`);

let sum = (n1,n2,n3)=>{

    var multiplication = n1*n2*n3;
    console.log(`Given Numbers 5,5,2 and Multiplication  =`,multiplication);
}
sum(5,5,2);

console.log(`===2 b.===`);

var sumOfnumbers = (n1,n2,n3=1)=>{

    var mul = n1*n2*n3;
    console.log(`Given Numbers 10,4,1 and Multiplication =`,mul);
}
sumOfnumbers(10,4);

console.log(`===3 a.===`);

var additionOf = (n1,n2,n3,n4,n5)=>{
    let add = n1 + n2 + n3 + n4 + n5;
    console.log(`Addition of Numbers 100,100,200,349,756 =`,add);
    return add;
    
}
var addition = additionOf(100,100,200,349,756);
console.log(`===3 b.===`);


var additionOf = (n1,n2,n3,n4,n5)=>{
    let add = n1 + n2 + n3 + n4 + n5;
console.log(`"I am" ," learning" ," ES6" ," features" ," in depth" :: `,add);
return add;
}
var addition = additionOf("I am" ," learning" ," ES6" ," features" ," in depth");

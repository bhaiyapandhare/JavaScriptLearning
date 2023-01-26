var resultDivide = 0/0;
console.log(`Result is: ${resultDivide}`);
console.log(`Type of${resultDivide} is ${typeof resultDivide}`);
var resultAdd = resultDivide + 10;
console.log(`resultAdd is: ${resultAdd}`);
var resultMul = resultDivide * 10;
console.log(`resultMul is: ${resultMul}`);
var num = new Number("Prathamesh");
console.log(`num is: ${num}`);



var add = 10 + 50;
var additon = "Pooja" + 70;
console.log(add);
console.log( `Name and Number : ${additon}` );

console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = +numStr;
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = +numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);


//Implicit con
let result;
result = `3`+`2`;
console.log(result);
result=`3`+true;
console.log(result);
result=`3`+undefined;
console.log(result);
result=`3`+null;
console.log(result);
result=`4`-true;
console.log(result);
result= 4+true;
console.log(result);
result= 4-true;
console.log(result);
result= 4+false;
console.log(result);
result=`4`+undefined;
console.log(result);
result=4-undefined;
console.log(result);
result=null+undefined;
console.log(result);
result=true+undefined;
console.log(result);

let result1=0
0==``;
console.log(result1);

0==`0`;
console.log(result1);

0==false;
console.log(result1);
null==undefined;
 
let result2 =1;
1==[1];
console.log(result2);

1==`1`;
console.log(result2);

1==true
console.log(result2);


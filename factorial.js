function factor(input){
var fact=1;
for (let index = 1; index <= input; index++) {
   fact= fact*index;
//  console.log(`Factorial of ${index} is`, fact );
}
 console.log(`Factorial of ${input} is`, fact );
}
factor(5);
factor(7);
factor(8);
factor(11);
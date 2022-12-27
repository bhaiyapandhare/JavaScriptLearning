console.log(`==1==`);
console.log("I am very good IT Developer");
var quote = "I am very good IT Developer";
var counter = 0;  
for (let index = 0; index < quote.length; index++) {
 var char = quote.charAt(index);
 if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
 char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {

    console.log(char);
    counter= counter+1 ;
 }
} console.log(`Total vowels in string is : ${counter}`);

console.log(`==2==`);
let cube =0;
    for (let num = 1; num<=5; num++) {
        cube += num*num*num  ;
        console.log(cube);
    }
console.log( `The sum of cube of numbers from 1 to 5 : ${cube}` );



console.log(`==3.1==`);

var quote = "Hard work always pays back";
var stringConcate ="";
var splitString = quote.split(" ").join("");
console.log(splitString);      // adding this line
for (let index = 0; index < quote.length; index++) { 
    if (index%2==0) {
        var oddPositionedChars = splitString.charAt(index); //var oddPositionedChars = quote.charAt(index);
        stringConcate += oddPositionedChars;
    }
} 
console.log("Hard work always pays back");
console.log(`Soon I will be Angular IT Champ`);

console.log(`Odd positioned characters in given string are: ${stringConcate}`)

console.log(`==3.2==`);
 
function oddPositionedChars(nameOfString) {
   console.log(`Given String is: ${nameOfString}`);
    var stringConcate ="";
    var splitString = nameOfString.split(" ").join("");
for (let index = 1; index < splitString.length; index= index+2) {
   var char=splitString.charAt(index);
   stringConcate +=char ;   
}
console.log(`Odd positioned character: ${stringConcate}\n`);
}
oddPositionedChars(`Soon I will be Angular IT Champ`);



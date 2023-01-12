console.log(`3)`);
function oddPositionedChars(nameOfString) {
  console.log(`Given string is: ${nameOfString}`);
  var stringConcate = "";
  var splitString = nameOfString.split(" ").join("");
  for (let index = 1; index < splitString.length; index = index + 2) {
    var char = splitString.charAt(index);
    stringConcate += char;
  }
  console.log(`Odd positioned characters:${stringConcate}\n`);
}
oddPositionedChars(`Hard work always pays back`);
oddPositionedChars(`Soon I will be Angular IT Champ`);

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
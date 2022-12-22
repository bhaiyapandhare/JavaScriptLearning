console.log(`1.I AM Learning JavaScript.The Language of intertnet`);
var sentence = "I AM Learning JavaScript.The Language of intertnet.";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  if (char == `a` || char == `A`) {
    console.log(` ${char}`);

    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

console.log(`2.My Favourite movie is LAggAn`);

var sentence = "My Favourite movie is LAggAn.";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  if (char == `a` || char == `A`) {
    console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

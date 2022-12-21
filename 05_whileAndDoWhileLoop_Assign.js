console.log(`==A==`);

var i = 5;
while (i <= 15) {
  console.log(i);
  i++;
}
console.log(`==B==`);
var i = 50;
while (i >= 40) {
  console.log(i);
  i--;
}

console.log(`==C==`);
var i = 2;
while (i <= 20) {
  console.log(i);
  i = i + 2;
}
console.log(`==D==`);
var i = 1;
while (i <= 30) {
  console.log(i);
  i = i + 2;
}

console.log(`==D==`);
var num = 5;
do {
  console.log(num);
  num = num + 5;
} while (num <= 50);

console.log(`==E==`);
var num = 10;
do {
  console.log(num);
  num = num + 10;
} while (num <= 100);

console.log(`==F==`);
var num = 100; // initialise
do {
  console.log(num);
  num = num - 10; // update
} while (num >= 10); // condition

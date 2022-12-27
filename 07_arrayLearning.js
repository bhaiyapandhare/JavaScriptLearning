   let arrayOfNames =[]; // empty array
console.log(arrayOfNames);

let arrayOfNumber =[4,5,6,7,10,7,6];
console.log(arrayOfNumber);

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray = typeof arrayOfNumbers; 
console.log(`Type of Array == ${typeOfArray}`);


console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let indexOf7 = arrayOfNumbers.indexOf(7);
console.log(`Index of element 7 --> ${indexOf7}`);

let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 10 --> ${indexOf10}`);

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}

console.log(`==accessing odd elments==`);
for (let index = 0; index < arrayOfNumbers.length; index++){
    if (index%2==0) {
        const element = arrayOfNumbers[index];
        console.log(element);
    }
}

console.log(`Traversing array using for loop in Reverse order`);
// initialization   condition  update 
let lastIndex = arrayOfNumbers.length-1;
for (let index = lastIndex; index > 0; index--) {
    const element = arrayOfNumbers[index];
    // console.log(element); 
}

console.log(`======== push() methods=========`);
let arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3); // Adding elemnts in last 
console.log(arrayOfNum);
arrayOfNum.push(3,5,7,11,22);
console.log(arrayOfNum);

console.log(`======== unshift() methods=========`);
var arrayOfNumb = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNumb);
arrayOfNumb.unshift(77);
console.log(arrayOfNumb);
arrayOfNumb.unshift(99, 111, 333);
console.log(arrayOfNumb);

console.log(`======== pop() methods=========`);
var arrayOfNumb = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNumb.pop();
console.log(popResult);
console.log(arrayOfNumb);

console.log(`======== pop() methods=========`);
var arrayOfNumb = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNumb.shift();
console.log(shiftResult);
console.log(arrayOfNumb);

console.log(`======== slice() methods=========`);
var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNumb.slice(3);
let sliceRes = arrayOfNumb.slice(2, 5);
console.log(arrayOfNumb);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======== splice() methods=========`);
var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNumb.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNumb);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNumb.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNumb);
console.log("Total deleted elements: ", spliceRes);

console.log("====== Inserting element in the array =======");
var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumb);
arrayOfNumb.splice(2, 0, 88);
console.log(arrayOfNumb);
arrayOfNumb.splice(1, 0, 55, 99, 22);
console.log(arrayOfNumb);

console.log("====== Replacing element in the array =======");
var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumb);
arrayOfNumb.splice(3, 1, 22);
console.log(arrayOfNumb);
console.log("====== Replacing element in the array when splice(2, 3, 99, 77 ) =======");
var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
arrayOfNumb.splice(2, 3, 99, 77 );
console.log(arrayOfNumb);

console.log(`======== for of loop ==========`);
var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumb);
for (const element of arrayOfNumb) {
    console.log(element);
}
console.log("==========include() ========");
var arrayOfNumb = [4, 5, 6, 8, 9, 33, 66];
let isAvailable =  arrayOfNumb.includes(9);
console.log(isAvailable);

console.log(`======== join() ==========`);

var arrayOfNumbe = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNumbe.join("|");
console.log(joinResult);
console.log(typeof joinResult);

console.log(`======== concat() ==========`);
var arrayOfNumbe = [4, 5, 6, 8, 9, 33, 66];
let arrayOfName = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNumbe.concat(arrayOfName, arrayOfCities);
console.log(concatArray);

console.log(`======== Resize an array ==========`);
var arrayOfNumbe = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumbe.length);
arrayOfNumbe.length = 5; // last elements will be ignored we can set 10 as length
console.log(arrayOfNumbe);
console.log(arrayOfNumbe.length);

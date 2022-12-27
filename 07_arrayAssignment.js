let arrayNumbers = [4, 6, 7, 8, 3, 2];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    const element = arrayNumbers[index];
    console.log(element);
  }
}

let arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayOfFruits);

let elementAtZeroIndex = arrayOfFruits[0];
console.log(`Element at Zero index : ${elementAtZeroIndex}`);
console.log(`Last Element : ${arrayOfFruits[4]}`);

console.log(" Adding Papaya before Banana");
arrayOfFruits.unshift("Papaya");
console.log(arrayOfFruits);

console.log("Removing Mango From Array");
arrayOfFruits.splice(4,1);
console.log(arrayOfFruits);

console.log(" Adding Pineapple at Last position");
arrayOfFruits.splice(5,1,"Pineapple");
console.log(arrayOfFruits);

console.log(" Adding Dragon Fruit before Water Melon");
arrayOfFruits.splice(4,0,"Dragon Fruit");
console.log(arrayOfFruits);

console.log("Replacing Orange with Kiwi");
arrayOfFruits.splice(2,1,"Kiwi");
console.log(arrayOfFruits);


console.log("Accessing elements from 1 to 4");
let spliceResult=arrayOfFruits.splice(1,4);
console.log(spliceResult);

let arrayOfFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

let lastIndex = arrayOfFruit.length-1;
    for (let index =lastIndex ; index >lastIndex-3; index--) {
        const element = arrayOfFruit[index];
        console.log(element);
 
    }

console.log("==== Assignment 01 ====");
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

console.log("Last Three Elemenst Using Length Property");
console.log(arrayOfFruits);

let lastIndex = arrayOfFruits.length-1;
    for (let index =lastIndex ; index >lastIndex-3; index--) {
        const element = arrayOfFruits[index];
        console.log(element);
    }

    console.log("==== Assignment 02 ====");
    let arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
    let length=arrayNumbers.length;
    console.log(arrayNumbers);
    console.log(length);
    console.log(`Element at Zero index : ${arrayNumbers[0]}`);
    console.log(`Element at Last index : ${arrayNumbers[10]}`);

    // let lastIndexe = arrayNumbers.length-1;
    // for (let index = lastIndexe-3; index < array.length; index++) {
    //     const element = array[index];
        
    // }


    // console.log(`Element at Third Last index : ${thirdLastIndex}`);

console.log(`==accessing even positioned elments==`);
for (let index = 0; index < arrayNumbers.length; index++){
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}
console.log(`==accessing odd positioned elments==`);
for (let index = 0; index < arrayNumbers.length; index++){
    if (index%2==1) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}
{console.log("==========include() ========");
let isAvailable =  arrayNumbers.includes(115);
console.log(isAvailable);
}
{
console.log("==========include() ========");
let Available =  arrayNumbers.includes(23);
console.log(Available);
}
console.log("==Adding 55,66 before index 3==");
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(" Deleting 3 Elements from index 4");

let delete3Ele=arrayNumbers.splice(4,3);
console.log(arrayNumbers);
console.log(delete3Ele);


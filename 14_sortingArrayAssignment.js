const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45]  
console.log(`===1`);
console.log(array_roll_numbers);
console.log(`===2`);

array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(`===3`);

array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`===4`);

array_roll_numbers.sort((r1,r2)=>{
    return r1>r2 ? 1:-1;
})
console.log(array_roll_numbers);
console.log(`===5`);

console.log(`Greatest number from the array is : `, array_roll_numbers[9]);
console.log(`===6`);

console.log(`Smallest number from the array is : `, array_roll_numbers[0]);

console.log(`===7`);

let setOfRollNumbers = new Set(array_roll_numbers);
console.log(setOfRollNumbers);


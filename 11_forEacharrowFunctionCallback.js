const array_numbers =[1,-7,40,507,-77,91,0,108,89,-601]
console.log(array_numbers);

array_numbers.forEach((currentValue,index)=>{
console.log(`Values :`,currentValue , ` Index:`, index);
})

console.log(`==Positive Numbers==`);
 array_numbers.forEach((currentValue)=>{
if (currentValue>0) {
    console.log(currentValue);
}   
 })

 const array_negative=[];
array_numbers.forEach((currentValue)=>{
    if (currentValue<0) {
        array_negative.push(currentValue)
    }   
     })
     console.log(`Array of Negative numbers :`,array_negative);


console.log("======== Find even numbers==========");
const array_even=[];
console.log(array_numbers);
    array_numbers.forEach((currentValue)=>{
        if (currentValue%2==0 ) {
            array_even.push(currentValue)
            console.log(currentValue);
        }
    })
    console.log("Array of even numbers");
    console.log(array_even);

    // array_numbers.forEach((currentValue,index)=>{
    //     if (index+2) {
    //         index = currentValue
    //         // console.log(index);
    //         console.log(index);

    //     }
    // })

let result = 0;
    array_numbers.forEach((currentValue)=>{
        result += currentValue;
    // console.log(result);
})
console.log(array_numbers);
console.log(`Addition of array elements =`,result);

console.log(`==== Even Positioned Values ====`);
array_numbers.forEach((currentValue,index)=>{
        if (index%2==0) {
            console.log(currentValue);
        }
})


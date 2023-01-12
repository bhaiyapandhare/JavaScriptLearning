var string = "Codemind Technolgy";
// var string1 = "Codemind";
var reverseString = "";
var lastIndex = string.length-1
for (let index = lastIndex; index >=0; index--) {
    // const element = string.charAt(index);
//     if (string.length==" ") {
//         const element = string.charAt(index);
//         reverseString = reverseString.concat(element);
//         break;
//     }
//     else{
//         const element = string.charAt(index);
//         reverseString = reverseString.concat(element)
//     }
// // console.log(reverseString)
    // reverseString = reverseString.concat(element)
    // console.log(element.concat());
    const element = string.charAt(index);
    reverseString = reverseString.concat(element)
} 
console.log(reverseString);
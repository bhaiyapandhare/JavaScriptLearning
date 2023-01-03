const personalDetails = {
name :"Maruti Pandhare",
collegeName : "FTC Sangola", 
age : 26,
location : "Sangola",
}

console.log("====Personal Details====");
console.log(personalDetails);


const collegeDetails={

    collegeName: "FTC Sangola",
    degreePercentage : "76%",
    eshtablished : "2011",
    university : "DBATU",
    accredited : "NAAC", 
    certification : " ISO 9001 2005 Certified",
    collegeId:6756,
    collegeDepartment: "Seven Departments"
}
console.log("====College Details====");
console.log(collegeDetails);

console.log("===After Merging Details===");
Object.assign (personalDetails,collegeDetails)
console.log(personalDetails);


const friendNames ={
    fristName:"Suhas",
    secondName:"Ritesh",
    thirdName:"Sanket",
    fourthName:"Raunak",
    fithName:"Maruti",
    
}
console.log("===My friends===");

console.log("My friends:",friendNames );
console.log("===After Freeze===");
Object.freeze(friendNames);
friendNames.sixthName ="Akshay";
friendNames.city = "Pune";
delete friendNames.fourthName;
console.log("My friends:",friendNames );


// const friendNames ={
//     fristName:"Suhas",
//     secondName:"Ritesh",
//     thirdName:"Sanket",
//     fourthName:"Raunak",
    
        
//     for (const fristName of friendNames) {
//         console.log("");
//     }
// }
// console.log("===My friends===");

console.log("Codemind Technlogy");

var string = "Technology";

// var reverseString= "Technology";
var lastCharPosition = string.length-1;

// console.log(company);
// console.log(company.length);
// console.log(company.lastIndexOf(19));
for (let index = lastCharPosition ; index >= 0; index--) {
   var char = string.charAt(index);
   var char2 = string.charAt(3);
   reverseString = string.concat(char);

}

console.log(char);
console.log(char2);
console.log(reverseString);


var sentence = "Yes Just do it man, I know you can";
// initi   cond  update 
var reverseString = "";
 var lastCharPosition = sentence.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
    // console.log(char);    
}
console.log(reverseString)

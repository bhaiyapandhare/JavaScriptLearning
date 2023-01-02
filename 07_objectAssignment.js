console.log("========Assignment O1========");
const professor={
 name: "Pratik Patne",
 education: "Msc Maths",
 age:28,
 subject:"Maths",
 university:"Pune",

//  degrees: {

//     certification: "CSC",
//     phd:"Doctor Of Philosophy",
//     awards: "Best Teaching Skills",

//  degree: function() {
//   return this.certification + this.phd + this.awards;
//  },
// },
//  degrees : function () {
//     certification: "CSC",
//     phd:"Doctor Of Philosophy",
//     awards: "Best Teaching Skills",
//     return this.certification+this.phd+this.achivements ;
//  }, 
    certificates: {
       hackerRank:"First Rank",
     participation:"Pune University Maths Topper Exam",
    certification:"Certificate in IFE course", 

    },

    joinedCollege:"Vidyavardhini Institute",

}

console.log(professor);

console.log("Adding a object property ");
 professor.College="Vidyavardhini",
  console.log(professor);

console.log("Updating a Nested object property ");
 professor.awards = "Best Tutor of Year",
 console.log(professor);

 console.log("Adding a object property Certificates");
console.log(professor.certificates);

console.log("Deleting a Nested object property ");
delete professor.certificates.hackerRank ;
console.log(professor);


// console.log("Accesing a Nested object property ");

// console.log(professor.degrees.degree);





console.log("========Assignment O2========");

const sbiBank={
    bankName:"State Bank of India",
    location:"Deccan Gynkhana",
    accountNo: 351024561122,
    ifsc: "SBIN000111",
    interestRate:"8%",
}
console.log(sbiBank);

const axisBank ={
bankName:"Axis Bank",
location:"Fergusson College Road",
accountNo:915810002002,
ifsc:"UTIB0000037",
interestRate:"8.5%",
}
console.log(axisBank);

const hdfcBank={
bankName: "HDFC Bank",
location:"Bund Garden Rd",
accountNo:800023781133,
ifsc:"HDFC0004629",
interestRate:"8.7%",
}
console.log(hdfcBank);

const yesBank={
bankName4:"Yes Bank",
location:"Shivaji Nagar ",
accountNo:112234500567,
ifsc:"YESB0000008",
interestRate:"8.6%",
}

console.log(yesBank);

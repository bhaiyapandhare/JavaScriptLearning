console.log(`1.Shallow Cloning`);
const arrayNums=[20,3,4,56,90,400,49];
const array = arrayNums ;

console.log(array);
array.push(55,66);
console.log(`Cloned array after using push`,array);

console.log(`2.Deep Cloning`);
const arrayNums1=[20,3,4,56,90,400,49];
const clonedArray = [...arrayNums1] ;

arrayNums1.push(10,25);
console.log(`Updated original Array`,arrayNums1 );
console.log(`Cloned array `,clonedArray);

console.log(`3.Merge or concat`);
const arrayNums2=[20,3,4,56,90,400,49];
const arrayEven=[2,30,14,8];

console.log(arrayNums2);
console.log(arrayEven);
const concatArray=[...arrayNums2,...arrayEven];
console.log(`Merge or Concat Array using Spred Operator`,concatArray);


console.log(`==4.==`);

const employee_Info={
    emp_id:27,
    emp_name: "John Doe",
    salary :{
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR",

    },
    address: {
        locality:{
            colony:"Om Vrndavan Society",
            street:"Kanch Pokali, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India",
},
mobiles:["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"],
    
}
console.log(employee_Info);

console.log(`John Doe Address : , ${employee_Info.address.locality.colony},${employee_Info.address.locality.street}, ${employee_Info.address.city}, ${employee_Info.address.state}, ${employee_Info.address.country}`);

    //  console.log(`John Doe Address :`, address1, );


console.log(employee_Info.mobiles);
console.log(`John Doe Mobiles are: ${employee_Info.mobiles}`);

let clonedInfo = JSON.parse(JSON.stringify(employee_Info));
clonedInfo.salary.july_month = "80,000INR";
clonedInfo.address.country = "United Kingdom";
console.log(clonedInfo);
console.log(employee_Info);
console.log(`John Doe Salary :`,employee_Info.salary);
console.log(`John Doe Updated Salry :`, clonedInfo.salary);
console.log(`Updated July Month Salary `,clonedInfo.salary.july_month);
console.log(employee_Info.address);
console.log(clonedInfo.address);
console.log(`Previous Country:`, employee_Info.address.country);
console.log(`Updated Country:`, clonedInfo.address.country);



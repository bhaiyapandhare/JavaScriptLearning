// function fruit(...fruits) {
//     console.log(fruits);
// }
// fruit("Pineapple", "Straw", "watermelon");
// fruit(`x,y,z,w,u,v`);


// const studentDetails= {
// name : "Suresh",
// city : "Pune",
// age : 25,

// }
// let { name ,age} = studentDetails; // Object destructuring
// console.log(name ,age);

// const fruits=["Papaya", "Straw", "Lemon", "Orange"]
// let [f1,f2]=fruits
// console.log(f1,f2); // array destructing

class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    } 
}
let emp_anil = new Employee(22, "Anil  ", "IT", 50000, "TCS");
let emp_radha = new Employee(33,"Radha ", "HR", 74000, "Wipro");
let emp_rushi = new Employee(55,"Rushi", "Finance", 47000, "TCS");
let emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
let emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
let emp_viny = new Employee(88,"Vinny ", "IT", 75000, "TCS");
let emp_mahi = new Employee(99,"Mahi  ", "HR", 85000, "Infy");

const array_emps = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi]

const companyFilter = array_emps.filter((value)=>{
    console.log(value);
 return value.emp_company == "Wipro" ;
})
companyFilter.forEach((emp)=>{
console.log(`Name:`, emp.emp_name , `   `, `Comapny:`,  emp.emp_company ,`  `, `Salary:` , emp.emp_salary);
})


 const emp_department =  array_emps.filter((value)=>{
    if (value.emp_dept== "IT" || value.emp_dept== "HR") {
        return value;
    }  
})
console.log("===It or Hr Dept===");
emp_department.forEach((val)=>{
console.log(`Name:`, val.emp_name , `Department:`, val.emp_dept,  `Comapny:`,  val.emp_company ,`  `, ` Salary:` , val.emp_salary);
})
const emp_idFilter = array_emps.filter((value)=>{
    return value.emp_id> 50;
   })
   console.log("====ID>50====");
   emp_idFilter.forEach((values)=>{
   console.log(`ID:`,values.emp_id, `Name:`, values.emp_name , `Department:`, values.emp_dept, ` Salary:` , values.emp_salary, `Comapny:`,  values.emp_company , );
   })
console.log(`\n`);

   const nameFilter = array_emps.filter(avm=>{
    if (avm.emp_name.startsWith("A")||avm.emp_name.startsWith("V")||avm.emp_name.startsWith("M")) {
        return avm.emp_name ;
    }
   })
   nameFilter.forEach(value=>{
console.log(`Name:`, value.emp_name);
   })

var totalSal = 0 ; 
array_emps.forEach((value)=>{
    totalSal += value.emp_salary;
})
console.log(`Total salary of all employees:`,totalSal);
const averageSal = totalSal/array_emps.length;
console.log(`Average salary of all employees:`,averageSal);


// var salary = array_emps.filter(value=> value.emp_dept=="IT")
// .reduce((runningTotal, value)=> runningTotal + value.emp_salary);
// console.log(salary);

const itDept = array_emps.filter((value)=>{
    return value.emp_dept=="IT";  
})    
itDept.forEach((value)=>{
    console.log(value);
})

const itDept1 = array_emps.filter((value)=>{
    return value.emp_dept1=="IT";  
})    
var totalSalaryIT = 0;
itDept.forEach((value)=>{
        console.log(value.emp_salary);
        totalSalaryIT += value.emp_salary
})
const avgOfItDept = totalSalaryIT/itDept.length;
console.log(`Total salary of IT Dept :`, totalSalaryIT);
console.log(`Average salary of IT Dept :`,avgOfItDept);


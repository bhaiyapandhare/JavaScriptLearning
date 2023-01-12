class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    } 
}
let emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
let emp_radha = new Employee(33,"Jay", "HR", 74000, "Wipro");
let emp_rushi = new Employee(55,"Rushi", "Finance", 47000, "TCS");
let emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
let emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
let emp_viny = new Employee(88,"Vinny", "IT", 75000, "TCS");
let emp_mahi = new Employee(99,"Mahi", "HR", 85000, "Infy");
console.log(emp_anil);

console.log(`====1====`);

const emp_details =[emp_anil,emp_radha,emp_rushi,emp_sonali,emp_monika,emp_viny,emp_mahi]

emp_details.forEach(employee=>{
    console.log(employee.emp_name,employee.emp_company);
})
console.log(`====2====`);

emp_details.forEach(val=>{
   if (val.emp_salary>=50000) {
    console.log(val.emp_id, val.emp_name,val.emp_dept,val.emp_salary,val.emp_company);
   }
})
console.log(`====3====`);
var totalSal=0;
emp_details.forEach(value=>{
totalSal += value.emp_salary;
})
console.log( `Total Salary of Emplyoees = `,totalSal); 

console.log(`====4====`);
var totalSal=0;
emp_details.forEach(value=>{
totalSal += value.emp_salary;
})
var avgSalary = totalSal/emp_details.length
console.log( `Total Salary of Emplyoees = `,totalSal); 
console.log( `Total Number of Emplyoees = `,emp_details.length); 
console.log( `Average Salary of Emplyoees = `,avgSalary); 


console.log(`====5====`);

emp_details.forEach(v=>{
    if ((v.emp_dept=="IT"|| v.emp_dept== "HR") && v.emp_salary>=75000) {
        console.log(`Employee Details :`, ` ID:`,v.emp_id, ` Name:`, v.emp_name, ` Dept:`, v.emp_dept,` Salary:`,v.emp_salary, ` Company`,v.emp_company);
        
    }
})

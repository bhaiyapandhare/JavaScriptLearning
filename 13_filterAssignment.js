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

const arrayOfEmp = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi]
const empCompany= arrayOfEmp.filter((value)=>{
    console.log(value);
return value.emp_company == "TCS";

})
console.log(`=====1=====`);

empCompany.forEach((value)=>{
console.log(` Company name:`,value.emp_company ,  `Employee name:`,value.emp_name);
})
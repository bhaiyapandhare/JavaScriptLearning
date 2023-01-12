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

let map_employees = new Map ();

map_employees.set( "22",emp_anil )
map_employees.set( "33", emp_radha)
map_employees.set( "55",emp_rushi )
map_employees.set( "66",emp_sonali )
map_employees.set( "77",emp_monika )
map_employees.set( "88",emp_viny )
map_employees.set( 99,emp_mahi )

map_employees.forEach((e,id)=>{
console.log(id,e);

})

map_employees.forEach((e,id)=>{
    console.log(id, `===>` ,` Name:`,e.emp_name , ` Dept:`, e.emp_dept,` Comp:`, e.emp_company, ` Salary:`, e.emp_salary);
})
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
let emp_rushi = new Employee(55,"Rushi ", "Finance", 47000, "TCS");
let emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
let emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
let emp_viny = new Employee(88,"Vinny ", "IT", 75000, "TCS");
let emp_mahi = new Employee(99,"Mahi  ", "HR", 85000, "Infy");


const array_emp_details =[emp_anil,emp_radha,emp_rushi,emp_sonali,emp_monika,emp_viny,emp_mahi]

array_emp_details.sort((id1,id2)=>{

    return id1.emp_id>id2.emp_id ? 1 :-1 ;

})
console.log(`==== Sort By ID====`);

array_emp_details.forEach((val)=>{
console.log(`ID :`,val.emp_id ,`Name:`, val.emp_name , `Dept:`,val.emp_dept ) ;
})
console.log(`\n`);

console.log(`==== Sort By Dept====`);
array_emp_details.sort((dept1,dept2)=>{
    return dept1.emp_dept > dept2.emp_dept ? 1 : -1 ;
})
array_emp_details.forEach((element)=>{
    console.log(`ID :`,element.emp_id , `Dept:`,element.emp_dept , `Company:`, element.emp_company );

})
console.log(`\n`);


array_emp_details.sort((salary1 , salary2)=>{

    return salary1.emp_salary  >  salary2.emp_salary ? -1 :1;

})
console.log(`==== Sort By Salary====`);

array_emp_details.forEach((value)=>{
console.log(`Name:`, value.emp_name , `Salary:`, value.emp_salary ,`Dept:`, value.emp_dept );
})
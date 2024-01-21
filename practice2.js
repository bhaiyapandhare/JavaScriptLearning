// // function fruit(...fruits) {
// //     console.log(fruits);
// // }
// // fruit("Pineapple", "Straw", "watermelon");
// // fruit(`x,y,z,w,u,v`);


// // const studentDetails= {
// // name : "Suresh",
// // city : "Pune",
// // age : 25,

// // }
// // let { name ,age} = studentDetails; // Object destructuring
// // console.log(name ,age);

// // const fruits=["Papaya", "Straw", "Lemon", "Orange"]
// // let [f1,f2]=fruits
// // console.log(f1,f2); // array destructing

// class Employee{
//     constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
//         this.emp_id = emp_id;
//         this.emp_name = emp_name;
//         this.emp_dept = emp_dept;
//         this.emp_salary = emp_salary;
//         this.emp_company = emp_company;

//     } 
// }
// let emp_anil = new Employee(22, "Anil  ", "IT", 50000, "TCS");
// let emp_radha = new Employee(33,"Radha ", "HR", 74000, "Wipro");
// let emp_rushi = new Employee(55,"Rushi", "Finance", 47000, "TCS");
// let emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
// let emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
// let emp_viny = new Employee(88,"Vinny ", "IT", 75000, "TCS");
// let emp_mahi = new Employee(99,"Mahi  ", "HR", 85000, "Infy");

// const array_emps = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi]

// const companyFilter = array_emps.filter((value)=>{
//     console.log(value);
//  return value.emp_company == "Wipro" ;
// })
// companyFilter.forEach((emp)=>{
// console.log(`Name:`, emp.emp_name , `   `, `Comapny:`,  emp.emp_company ,`  `, `Salary:` , emp.emp_salary);
// })


//  const emp_department =  array_emps.filter((value)=>{
//     if (value.emp_dept== "IT" || value.emp_dept== "HR") {
//         return value;
//     }  
// })
// console.log("===It or Hr Dept===");
// emp_department.forEach((val)=>{
// console.log(`Name:`, val.emp_name , `Department:`, val.emp_dept,  `Comapny:`,  val.emp_company ,`  `, ` Salary:` , val.emp_salary);
// })
// const emp_idFilter = array_emps.filter((value)=>{
//     return value.emp_id> 50;
//    })
//    console.log("====ID>50====");
//    emp_idFilter.forEach((values)=>{
//    console.log(`ID:`,values.emp_id, `Name:`, values.emp_name , `Department:`, values.emp_dept, ` Salary:` , values.emp_salary, `Comapny:`,  values.emp_company , );
//    })
// console.log(`\n`);

//    const nameFilter = array_emps.filter(avm=>{
//     if (avm.emp_name.startsWith("A")||avm.emp_name.startsWith("V")||avm.emp_name.startsWith("M")) {
//         return avm.emp_name ;
//     }
//    })
//    nameFilter.forEach(value=>{
// console.log(`Name:`, value.emp_name);
//    })

// var totalSal = 0 ; 
// array_emps.forEach((value)=>{
//     totalSal += value.emp_salary;
// })
// console.log(`Total salary of all employees:`,totalSal);
// const averageSal = totalSal/array_emps.length;
// console.log(`Average salary of all employees:`,averageSal);


// // var salary = array_emps.filter(value=> value.emp_dept=="IT")
// // .reduce((runningTotal, value)=> runningTotal + value.emp_salary);
// // console.log(salary);

// const itDept = array_emps.filter((value)=>{
//     return value.emp_dept=="IT";  
// })    
// itDept.forEach((value)=>{
//     console.log(value);
// })

// const itDept1 = array_emps.filter((value)=>{
//     return value.emp_dept1=="IT";  
// })    
// var totalSalaryIT = 0;
// itDept.forEach((value)=>{
//         console.log(value.emp_salary);
//         totalSalaryIT += value.emp_salary
// })
// const avgOfItDept = totalSalaryIT/itDept.length;
// console.log(`Total salary of IT Dept :`, totalSalaryIT);
// console.log(`Average salary of IT Dept :`,avgOfItDept);


// var num1 = parseInt(prompt (`Enter number 1`));
// var num2 = parseInt(prompt (`Enter number 2`));

// let sum = num1+num2;

// console.log(`Entered Numbers  :, ${num1} , ${num2} , and Sum is, ${sum}`)

// const number = 64 ;
// const result = Math.sqrt(number);
// console.log(`The square root of ${number} is ${result}`);

// var base = 12;
// var height = 30;

// var area = (base*height)/2;

// console.log(`Area of triangle base : ${base}, height: ${height}, area ${area} `);


// class Employee{
//     constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
//         this.emp_id = emp_id;
//         this.emp_name = emp_name;
//         this.emp_dept = emp_dept;
//         this.emp_salary = emp_salary;
//         this.emp_company = emp_company;

//     } 
// }
// let emp_anil = new Employee(22, "Anil  ", "IT", 50000, "TCS");
// let emp_radha = new Employee(33,"Radha ", "HR", 74000, "Wipro");
// let emp_rushi = new Employee(55,"Rushi", "Finance", 47000, "TCS");
// let emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
// let emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
// let emp_viny = new Employee(88,"Vinny ", "IT", 75000, "TCS");
// let emp_mahi = new Employee(99,"Mahi  ", "HR", 85000, "Infy");

// const array_emps = [emp_anil, emp_radha, emp_rushi, emp_sonali, emp_monika, emp_viny, emp_mahi]

// let addition = 0; 
// const deptFilter =  array_emps.filter((val)=>{
//   if (val.emp_company == "Wipro") {
//     return addition += val.emp_salary; 
//   }  
// })
// console.log(addition/deptFilter.length);


// const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];

// const evenNumber = array_roll_numbers.filter((val)=>{
//     return val%2 == 0;
// })
// console.log(evenNumber);
// var sumOfEven=0;
//  evenNumber.forEach((even)=>{
//     console.log(even);
//     sumOfEven += even; 
// })
// console.log(sumOfEven);


// let evenValue = array_roll_numbers.filter(val=>val%2==0)
// .reduce((runningTotal, value)=>{
//     return runningTotal+value;
// })

// console.log( `Using filter and Reduce `,evenValue);

// const arrayTransform = array_roll_numbers.map((curremtValue, index , array)=>{
// return curremtValue+index ;
// console.log(array);

// })
// console.log(array_roll_numbers);
// console.log(arrayTransform);
// console.log(array);


// deptFilter.forEach(element => {
//     console.log(element.emp_company , element.emp_salary);
    
// }); 
// const sumofsalary = deptFilter.reduce((runningTotal, value)=>{
//     return runningTotal+value;
// })
// console.log(sumofsalary);
// const array_roll_number=[113,45,56,11,32,45,109,799,56,45];
// const cIA= array_roll_number.map((currentValue,index,array)=>{
//     return currentValue, index , array; 
// })
// console.log(cIA.currentValue, cIA.index);

// console.log(currentValue);
//     console.log(index);
//     console.log(array);


var n1 = 15;
var n2 = 7;
// var add = n1 +n2 ;

n1 += n2; 
console.log(n1);
console.log(n2);

var n1 = 15;
var add1= --n1;
console.log(add1);

var n1 = 15;
var n2 = 7;
var n3 = 13;
var result = n1<n2;
console.log(result);

console.log(20%2);

var subjetMarks = 39; //out of 100 
var passOrFail = subjetMarks>=40 ? "Pass" : "Fail";
console.log(passOrFail);


var n1 = 15;
var n2 = 7; 

var greaterNum = n1<n2 ? n1 :n2;
console.log( `Gareter num from n1 =${n1} and n2 = ${n2} ===  `,greaterNum);

let person={
    name:`Yash`,
    age:27,   
    sal:100000,
    work:`5 Days`,
}
console.log(person.name);

person.comp=`Google`;
console.log(person.comp);
delete person.work
console.log(person);
person.comp=`Netflix`;
console.log(person);


const str= `Welcome Home`;

for(let w in str){
    console.log(str[w], w); // getting index of object 
}

for(let v of str){
    console.log(v); // getting values of object that is w , e ,l
}

let persons={
    name:`Yash`,
    age:27,   
    sal:100000,
    work:`5 Days`,
}
for(let key in persons){
console.log(`${key}=> ${persons[key]}`);
}
console.log("sal"in persons);

function Aarya (name,weight, age){
    this.name=name;
    this.weight=weight;
    this.age=age;
    this.greet = function(){
        return(`Hi Baby `+ this.name); 
    };

this.show =function(){
return ("Yes I am Beautiful");
}
}
let Tanuja = new Aarya("Tanuja", 40,16);
let Bhumika = new Aarya("Bhumika",41,16);
console.log(Tanuja, Tanuja.greet() ,Tanuja.show());
console.log(Bhumika, Bhumika.greet());

console.log(Tanuja.name,Tanuja.greet());
console.log(Tanuja.show());

Aarya.prototype.look=`Sexy`;
Aarya.prototype.eyes= `Glittering`
console.log(Tanuja.look , Bhumika.eyes);
console.log(Tanuja instanceof Aarya);



let date=new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.getMilliseconds());
const dd= new Date("09/12/2023")
console.log(dd);


class Car{
    name= "Skoda";
    seg = "SUV";
    model= "Kodiaq";
}
const SK=new Car();
console.log(SK);
console.log(SK instanceof Car);




let person2={
    name:`Yash`,
    age:27,   
    sal:100000,
    work:`5 Days`,
}

let clonedP2= Object.assign({},person2);

console.log(person2);
console.log(clonedP2);

person2.name='Maruti';
person2.age=18;
console.log(person2);
console.log(clonedP2);

// person2.name="Sanket";
// console.log(person2);
// console.log(clonedP2);

const array=[0,2,3,4,6,9];
for (let index = (array.length-1); index>=0; index--) {
    const element = array[index];
    console.log(element);
}
console.log(array);

console.log(array.push(11) , array);
console.log(array.pop(), array);
console.log(array.unshift(11), array);
console.log(array.shift(7), array);

console.log(array.slice(1,4),array);
array.splice(3,4);
console.log(array);

const Ar=['Sanket', 'Komal', 'Richa','Payal', 'Yash', 'Rohit', 'Anna','Chawaa'];
Ar.splice(0,0,"Ritu");
console.log(Ar);
console.log(Ar.reverse());
console.log(Ar.sort());

// (function() {
//     var a = b = 5;
//   })();
  
//   console.log(b);
console.log(`x , x++ ,++x`);
  let x= 10 ;
  let y = x++;

  console.log(x);
  console.log(y);
  let z = ++x; 

  console.log(z); 
//   console.log(x);
//   console.log(x,y,z)

  let a = [20];
      let b = ["20"] ;
      console.log(a[0]==b[0])
      console.log(a[0]===b[0]);


      function reverseString(string) {
        return string.split("").reverse().join("");
    }
    reverseString('I will be placed before 15 April')
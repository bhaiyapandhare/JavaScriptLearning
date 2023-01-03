class Vehicle{

    constructor(company, model, engine,color){
this.company = company;
this.model = model;
this.engine = engine;
this.color = color;
    }
}
let newCar1= new Vehicle("Hyundai","Creta",1499,"Black");
let newCar2= new Vehicle("Mercedes","Maybach",4000,"Red");
let newCar3= new Vehicle("Rolls-Royce","Wraith",6600,"Ocean Blue");
let newCar4= new Vehicle("BMW","7Series",3000,"Black");
let newCar5= new Vehicle("Audi","R8",4200,"Yellow");
console.log("Hyundai Creta");
console.log(newCar1);
console.log("Mercedes Maybach");
console.log(newCar2);
console.log("Rolls-Royce Wraith");
console.log(newCar3);
console.log("BMW 7Series");
console.log(newCar4);
console.log(" Audi R8");
console.log(newCar5);

class College{
constructor(collegename,location,graduation,percentage){
this.collegename = collegename;
this.location = location;
this.graduation = graduation;
this.percentage = percentage;
}
collegeDetails(){
    console.log("collegename:" , this.collegename, "location:",this.location, "graduation:", this.graduation, "percentage:", this.percentage)
    
    }
}

let coepCollege=new College( "COEP", "Pune", "Mech.Engg", 76);

let fcCollege=new College( "FC", "Pune", "Comp.Engg", 71);

let sknCollege=new College( "SKN", "Pune", "It.Engg", 60);

let mitCollege=new College( "MIT", "Pune", "E&TC.Engg", 65);

// console.log(coepCollege);
console.log("===College Details===");
coepCollege.collegeDetails();
fcCollege.collegeDetails();
sknCollege.collegeDetails();
mitCollege.collegeDetails();

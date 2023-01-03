function Bank(bankName,location, ifscCode,interestRate){

    this.bankName = bankName;
    this.location =location;
    this.ifscCode = ifscCode;
    this.interestRate = interestRate;
}
let sbiBank =new Bank ( "State Bank of India","Deccan Gynkhana","SBIN000111","8%");
console.log(sbiBank);

let axisBank=new Bank ( "Axis Bank","Fergusson College Road","UTIB0000037","8.5%");
console.log(axisBank);

let yesBank =new Bank ( "Yes Bank","Shivaji Nagar ","YESB0000008","8.6%");
console.log(yesBank);

let mahBank=new Bank ( "Maharashtra Bank Of India","Shivaji Nagar ","MAHB0001150","8.3%");
console.log(mahBank);

// "State Bank of India","Deccan Gynkhana","SBIN000111","8%";
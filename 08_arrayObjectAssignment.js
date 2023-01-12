class Bank {
  constructor(bankName, location, ifscCode, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.interestRate = interestRate;
  }
}

let axisBank = new Bank("Axis Bank","Fergusson College Road","UTIB0000037","8.5%");
let sbiBank = new Bank("State Bank of India","Deccan Gynkhana","SBIN000111","8%");
let iciciBank = new Bank("ICICI Bank", "Shivaji Nagar", "ICIC0006997", "8.6%");
let kotakBank = new Bank("Kotak Bank", " Senapati Bapat Road", "KKBK0001772", "8.4%");
let panjabBank = new Bank("Panjab bank", "FC Road", "PUNB0014110", "8.3%");
let hdfcBank = new Bank("HDFC Bank", "Bund Garden Rd", "HDFC0004629", "8.7%");

console.log( "Objects : axisBank, sbiBank, iciciBank, kotakBank, panjabBank, hdfcBank");

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(panjabBank);
console.log(hdfcBank);

console.log("=== Using For of Loop === ");

const arrayOfBank = [axisBank, sbiBank, iciciBank, kotakBank, panjabBank,hdfcBank]

for (const element of arrayOfBank) {
//   console.log(element);
  console.log(`The Bank Name : ${element.bankName} , address : ${element.location}`);

}

console.log("=== Using For of Loop for Kotak Bank === ");

for (const element of arrayOfBank) {
    if (element == kotakBank) {
        console.log(`Kotak Bank deatils:`, element);

    }
}

// console.log(arrayOfBank[0]);

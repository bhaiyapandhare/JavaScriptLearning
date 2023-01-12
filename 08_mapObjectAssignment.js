console.log( `# Data Menbers = bankName, location, ifscCode, accountNo, interestRate`);

class Bank {
    constructor(bankName, location, ifscCode, accountNo, interestRate) {
      this.bankName = bankName;
      this.location = location;
      this.ifscCode = ifscCode;
      this.accountNo = accountNo
      this.interestRate = interestRate;
    }
  }

let axisBank = new Bank("Axis Bank","Fergusson College Road","UTIB0000037","91501001115611","8.5%")
let sbiBank = new Bank("State Bank of India","Deccan Gynkhana","SBIN000111","351024561122","8%");
let iciciBank = new Bank("ICICI Bank", "Shivaji Nagar", "ICIC0006997","702312226543", "8.6%");
let kotakBank = new Bank("Kotak Bank", " Senapati Bapat Road", "KKBK0001772","801234125687","8.4%");
let panjabBank = new Bank("Panjab bank", "FC Road", "PUNB0014110","810002003246", "8.3%");
let hdfcBank = new Bank("HDFC Bank", "Bund Garden Rd", "HDFC0004629","200012336674", "8.7%");
console.log(`# Objects = axisBank,sbiBank,iciciBank,kotakBank, panjabBank,hdfcBank \n`);

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(panjabBank);
console.log(hdfcBank);

const mapOfBank = new Map();

mapOfBank.set(91501001115611,axisBank );
mapOfBank.set(351024561122,sbiBank);
mapOfBank.set(702312226543,iciciBank);
mapOfBank.set(801234125687,kotakBank);
mapOfBank.set(810002003246,panjabBank);
mapOfBank.set(200012336674,hdfcBank);


const keyOfMapOfBank = mapOfBank.keys();
console.log(`\n`);
console.log( keyOfMapOfBank);

console.log(`\n`);
for (const keys of keyOfMapOfBank) {
const bank = mapOfBank.get(keys);
console.log(bank.bankName , bank.accountNo,bank.interestRate  );

}
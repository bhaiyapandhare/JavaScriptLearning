const car = {
    carName: "Creata SX",
    company : "Hyundai",
    launchYear: 2017,

}
const carEngine = {
    enginePower: "1499 CC",
    macPower : "114 BHP",
}
console.log(`====Using Object Assign===`)
Object.assign(car,carEngine);
console.log(`Using Object Assign:`,car);
console.log(`===Using Spread Operator===`)
let details = {...car,...carEngine};
console.log(`Using Spread Operator `,details);
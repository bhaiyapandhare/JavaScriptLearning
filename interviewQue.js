const response = {
    maran: {
      count: 50000,
    },
    gas: {
      count: 87000,
    },
    prelude: {
      count: 52000,
    },
    keys: ['maran', 'gas', 'prelude'],
  };
let sum =0;

 for (let keys of response.keys) {
    sum = sum + response[keys].count;

  }
  console.log(`The sum of count`, sum);


  const emp = {
    name: {
      sal: 56000,
    },
    years: {
      sal: 70000,
    },
    password: {
      sal: 6000,
    },
    keys: [`name`, `age`, `password`],
  };
  let sum1 =0;
  emp.keys.forEach(element => {
    sum1 += (emp[element].sal); 
    
  }); 
console.log(`${sum1}`);
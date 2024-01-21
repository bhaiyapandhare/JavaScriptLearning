arr = [10, 7, 'c', 'd', 'e', 15];

let number =[];
let character =[];

arr.forEach((value)=>{
   if(typeof (value)=== 'number'){
     number.push(value)
   }else if (typeof (value)=== 'string'){
     character.push(value)
   }
})
arr.sort((a,b)=>{return a-b});

console.log('numbers :', number);
console.log('chars :',character)

// removing duplicate array without using set
let nums2 =[2,5,5,4,3,3,2,3,6,6,7,7];

let uniq = nums2.filter((c,index)=>{
     return nums2.indexOf(c)===index
})
console.log(uniq);


let no =[2,3,4,5,2,3,8,9,1,2,3,5]

let unique = no.filter((c ,i)=>{
  return no.indexOf(c)===i})

  console.log(`Values`, unique);

  let nom =[2,3,4,5,2,3,8,9,1,2,3,5,4];

  let earray =[];
  nom.forEach((cv)=>{
if(cv%2 == 0)
earray.push(cv)
  })
  console.log(`Even Array` , earray);

 const n = earray.reduce((r ,v)=> r+v)
  console.log(n);

  let nom1 =[2,3,4,5,2,3,8,9,1,2,3,5,4];
  var finalR = nom1.filter(v=> v%2==0).reduce((r,v)=> r+v);
  console.log( `Chain Method` ,finalR);


  // Counting characters in array 

const abc = [`a`, `a`, `b`, `k`, `k`, `c`, `c`, `k`];
var count = {};
for (const char of abc) {
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}
for (const char in count) {
  console.log(char, count[char]);
}

const Char =[`a`, `a`, `b`, `k`, `k`, `c`, `c`, `k`,`d`,`f`,`c`]
var count ={};

for (let i = 0; i < Char.length; i++) {
  const element = Char[i];
  if(count[element]){
    count[element]++;
  }else{
    count[element]=1;
  }
  
}
for(const element in count){
  console.log( `Char`, element,  `Count`, count[element]);
}
  
let enarray=[1,2,3,4,2,3,4,7,8,9,4,1,13,14,12,11]
let earay=[];
enarray.forEach((v)=>
  {if(v%2==0) 
    earay.push(v)
  })
console.log(`Even`, earay);
 var even = earay.reduce((c,v) => c+v)
console.log(even);

 console.log(`Using Filter and Reduce`);
var f = enarray.filter((v)=> v%2==0).reduce((c,v)=> c+v)
console.log(f);

var a=0;
var b =1;
console.log(`Fibonacchi`);
console.log(a);
console.log(b);
for (let i = 0; i < 10; i++) {
  var temp = a+b;
  a=b;
  b=temp;
 
  console.log( temp);
}

function isPalindrome(word){

var palin = word.split('').reverse('').join('')
if(palin===word){
  return true;
}else{
  return false;
}

}
console.log(isPalindrome(`level`), `level`);
console.log(isPalindrome(`racecar`), `Racecar`);


var str = `Congratulations`
var re= str.split('').reverse('').join('')
console.log(`1`,re);

var sp = [...str].reverse('').join('')
console.log( `2`, sp );

var revString = "";
for (let index = str.length-1; index >= 0; index--) {
  const element = str[index];
  revString= revString.concat(element);
}
console.log(`3`,revString);

function revstring(str){
  return str.split("").reverse().join('');
}
console.log(revstring('Hello'));
console.log(revstring('Komal'));
console.log(revstring('Aarya'));

function revS(st){
  return st.split("").reverse('').join('')
}
console.log(revS("Tanu"));

function isPalind(word){
var palin = word.split('').reverse().join('');
return word === palin ;
}
console.log(isPalind('racecar'));

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(`Prime or Not: 11`, isPrime(11) ); // Output: true
console.log(`Prime or Not: 12`, isPrime(12) ); // Output: true
console.log(`Prime or Not: 2`, isPrime(2) ); // Output: true


function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
// fizzBuzz(18)
// fizzBuzz(30)


console.log(2 + "2");
console.log(typeof NaN);

console.log('**********');
console.log(2);
var p2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log(3);
    resolve()
  } ,1000)
})
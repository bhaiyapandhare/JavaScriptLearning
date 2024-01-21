var gV = 12;
function oFunc(){
    let oV = 18;
    let iFunc = function(){
let iV=21
console.log(`Golbal Var`, gV*2);
console.log(`Outer Var`, oV*3);
console.log(`Inner Var`, iV);
    }
    return iFunc;
}
let inner = oFunc();
inner()


function love(){
     console.log(' Fuction as Var = Yes My Love');
}
let L= love;
L();
console.log(` `);
function show(){
    console.log( `Thats why i leave you`);
}
 function dis(show){
    console.log(`I hate you`);
    show();
 }
 dis(show)
console.log(`Func can reteun another func @@ `);
 function returnF(){
    console.log(`You know what ??`);
    return function (){
        console.log(`I can do it and noboday is going to stop me!!!`);
    }
 }
 returnF()();

// let num = 5;
// if (num<0) {
//     console.log(`Num is greater than zero which is 5: `, num);
    
// }
// else{
// console.log(`Num is less than zero`);

// }

// var num = 10 ; 

// if (5 >= 10) {
//     console.log( `True`);
// }
// else{
//     console.log(`False`);
// }

// // for (let index = 0; index <=5; index++) {
// // console.log(index);    
// // }

// for (let index = 0; index <= 10; index=index+2) {
// console.log(index);    
// }
// for (let index = 20; index >= 10; index=index-2) {
//     console.log(index);    
//     }


//     // var i=1
//     // while (i<=5) {
//     //     console.log(i);
//     //     i++;
//     // }
// // console.log(`=========Infinite loop=========`);
//     // var i=5;
//     // while (i==5) {
//     //     console.log(i); // infinite Loop
//     // }


// // var index = 1;
// // do {
// // console.log(index);
    
// // } while (index==1);      // infinite loop

// for (let index = 0; index <=10; index++) {
// if (index ==5) {
//     continue;
// }       
//  console.log(index);

// }

console.log(`=====fibonacci series=====`);

// const num= 7
let a1=0;
let b1= 1;
console.log(a1);
console.log(b1);

for (let index = 0; index <= 10; index++) {
var temp = a1+b1  ;
a1 = b1;
b1 = temp;
 console.log(temp);
 console.log(a1);
}

var d = 0;
var c= 1;
// console.log(d);
// console.log(c);

for (let index = 0; index < 7; index++) {
var xyz= d+c;
d=c;
c=xyz;
console.log(xyz); 
console.log(d);   
  }

// var result =0;
// var cube ;
// for (let index = 0; index <=5; index++) {
// cube = index*index*index;
// result = result+cube;
// console.log(result);
// }




//  let name;
//  name= "Suhas";
//  console.log(name);

 

//  show();
// function show(){
//     console.log("Hello I am in show");
// }

//  console.log("======= Palindrome======");
// var palindrome = "rotator";
// var lastIndex = palindrome.length-1;

// for (let index = 0; index < palindrome.length/2; index++) {
//     const element = palindrome[index];
//     if (index == palindrome.length-1-index) {
        
//         console.log(`Palindrome of  word rotator : `,element);
//     }
    
// }

// var palin = "level";
// var lastIndex = palin.length-1;
// for (let index = 0; index < palin.length/2; index++) {
//     const element = palin[index];

//     if (index== lastIndex-index ) {
//         console.log(`Palindrome of  word level:`, element);
//     }
// }

// const arraylist =[2,3,6,11,67,89,0,3,45]

// console.log(arraylist);
// arraylist.shift(6);
// console.log(arraylist);
// arraylist.unshift(33);
// console.log(arraylist);
// // console.log(arraylist.shift(66));
// arraylist.push(5)
// console.log(arraylist);

// var fn="Yash ";
// var sn="Pandhare"
// var n= fn + sn
// console.log(n);
// var name1= fn.concat("Ambadas ",sn);
// console.log(name1);

var st= "    Think and Grow Rich.     ";
console.log(st.charAt(18));
console.log(st.length);
console.log(st.indexOf("i"));
console.log(st.trimStart());
console.log(st.trimEnd());
console.log(st.split("").join(" "));
console.log(st.indexOf("T"));
console.log(st.slice(7,12));
var word = st.trim().split(" ").join("");
console.log(word);
console.log(st.trim().split("").join(""));

var a=5;
var b= 5;
var c=a+b;
console.log(c);

var checkLeapYear= function(leapYear)
{
if (leapYear%4==0 && leapYear%100 !=0  || leapYear%400==0) {
    
    console.log(`The year is leap year`, leapYear);

}else if (leapYear === Number){

    // if (leapYear!=Number) {
    //     console.log(`Enter the valid data`);
    //     // console.log(`This is not a leap year`,leapYear);

    // }
    console.log(`This is not a leap year`,leapYear);

}else{
    console.log(`Enter Valid Data`);
}
}

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear(undefined);
checkLeapYear(1750);
checkLeapYear("Twenty Twenty");
checkLeapYear(NaN);


for (let i = 5; i <= 10; i++) {
console.log(i);    
}

var i=1
while (i<=5) {
    i++;
    console.log(i);
}

let n= 7;
do {
    n++;
    console.log(n);

} while (n<11);


for (let i = 5; i <= 10; i++) {
    if (i=7) {
       break; 
    }
    console.log(i);    
    }

    let person={
        name:`Yash`,
        age:27,   
    }
    console.log(person.name);

    console.log("Fibbonachi Series");
    var a=0;
    var b=1;
console.log(a);
console.log(b);
    for (let index = 0; index <=10; index++) {
var temp= a+b;
a=b;
b=temp;
console.log(temp);
// console.log(a);

    } 

var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
console.log(a==b);
console.log(a===b);


var palin = "level";
var lastIndex = palin.length-1;
for (let index = 0; index < palin.length/2; index++) {
    const element = palin[index];

    if (index== lastIndex-index ) {
        console.log(`Palindrome of  word level:`, element);
    }
}
console.log("********** Reverse String By For Loop ");

var s = 'I will be placed before 15 April';
var st = "";

for (let index = s.length-1; index >= 0; index--) {
var rString  = s.charAt(index);

st = st.concat(rString);
}
console.log('I will be placed before 15 April = ',st);  

var st= "Pnematicpump Auto"
let reverseString="";
for (let index = st.length-1; index >=0 ; index--) {
    const element = st[index];
    reverseString =reverseString.concat(element)
     
}
console.log( "Pnematicpump Auto = ", reverseString);


console.log(`********** Reverse String By split("").reverse().join('') `);


var mo='Chennai Express';
var mov=mo.split("").reverse().join('');
console.log('Chennai Express =',mov);

let webS=' The Summer I Turned Pretty';
let Series=webS.split("").reverse().join('')
console.log(' The Summer I Turned Pretty =', Series);


console.log(`********** Reverse String By Spread operator`);

const webSeries='Summer is here';
const arrRev=[...webSeries].reverse().join('');
console.log(arrRev);

let rev=[...webS].reverse().join('');
console.log(rev);

var r= "racecar";
var l= r.length-1
for (let index = 0; index <r.length/2; index++) {
    const element = r[index];
    if(index==l-index){
        console.log("Palindrome of word racecar =",element);
    }
}

var string = "Welcome to this Javascript Guide!";
console.log(`R`, string.split("").reverse().join(''));
var s= [...string].reverse().join('');
console.log(s);

var reverseString1 = "";
for (let index = string.length-1; index >=0; index--) {
    const element = string[index];
    reverseString1= reverseString1.concat(element); 
}
console.log(`Rev`,reverseString1);


var a=0;
var b= 1;
for (let index = 0; index <10; index++) {
console.log(a); 
 var temp = a+b;
 a=b;
 b= temp;    
}
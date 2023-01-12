// let num = 5;
// if (num<0) {
//     console.log(`Num is greater than zero which is 5: `, num);
    
// }
// else{
// console.log(`Num is less than zero`);

// }

var num = 10 ; 

if (5 >= 10) {
    console.log( `True`);
}
else{
    console.log(`False`);
}

// for (let index = 0; index <=5; index++) {
// console.log(index);    
// }

for (let index = 0; index <= 10; index=index+2) {
console.log(index);    
}
for (let index = 20; index >= 10; index=index-2) {
    console.log(index);    
    }


    // var i=1
    // while (i<=5) {
    //     console.log(i);
    //     i++;
    // }
// console.log(`=========Infinite loop=========`);
    // var i=5;
    // while (i==5) {
    //     console.log(i); // infinite Loop
    // }


// var index = 1;
// do {
// console.log(index);
    
// } while (index==1);      // infinite loop

for (let index = 0; index <=10; index++) {
if (index ==5) {
    continue;
}       
 console.log(index);

}

console.log(`=====fibonacci series=====`);

// const num= 7
let a=0;
let b= 1;
console.log(a);
console.log(b);

for (let index = 0; index <= 10; index++) {
var temp = a+b  ;
a = b;
b = temp;
 console.log(temp);
}

// var d = 0;
// var c= 1;
// // console.log(d);
// // console.log(c);

// for (let index = 0; index < 7; index++) {
// var xyz= d+c;
// d=c;
// c=xyz;
// console.log(xyz);    
//   }

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

const arraylist =[2,3,6,11,67,89,0,3,45]

console.log(arraylist);
arraylist.shift(6);
console.log(arraylist);
arraylist.unshift(33);
console.log(arraylist);
// console.log(arraylist.shift(66));
arraylist.push(5)
console.log(arraylist);
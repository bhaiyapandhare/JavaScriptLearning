const arr =[1,2,3,4,2,3,5,7,8,6,5,5,9]

 var count={};

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    count[element]= count[element]? count[element]+1 :1;

}
console.log(count);
const arr2 = ['a', 'b', 'c', 'a', 'b', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'b', 'k', 'l', 'a', 'c', 'd', 'd'];

// Initialize an empty object to store the counts
const counts = {};

// Iterate over each character in the array
for (const char of arr2) {
  // Check if the character already exists in the counts object
  if (counts[char]) {
    // If it exists, increment the count
    counts[char]++;
  } else {
    // If it doesn't exist, initialize the count to 1
    counts[char] = 1;
  }
}

// Print the counts
for (const char in counts) {
  console.log(`Character '${char}' occurs ${counts[char]} time(s)`);
}


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


const numb=[1,2,3,4,5,2,3,7,4]

var count ={};

for(const value of numb){
  if(count[value])
  {
    count[value]++
  } else{
    count[value] = 1;
  }
}
for(const value in numb){
  console.log(value , count[value]);
}
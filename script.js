//   // 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
//   // Using a for loop:
function runCode(){
for (var i = 0; i<numbers.length; i++){
     const character = String.fromCharCode(numbers[i]);
    result1a.push(character);
  }
  document.getElementById("forloop").innerHTML += " " + letter;
  
  
   // Using the forEach method:
// forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).

var numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

 numbers.forEach(element => {
document.getElementById('foreach').innerHTML += " " + letter
 })



//   // Using the map method
//     const charArr  = numbers.map(element => {
//     const letter = String.fromCharCode(element);
//   Return letter
// })

document.getElementById("map").innerHTML = charArr.join(" ");

//   // 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
//   // Answer:

// Const filteredArray = numbers.filter(element => {
//     return element > 72 && number <= 88
// })

// document.getElementById("filter").innerHTML += filteredArr.join("");
// // Console.log(return);

   
   
   
     // 3. Display the product of all numbers using reduce
// Answer:

const result = numbers.reduce((accumulator, currentValue) => { return accumulator * currentValue } 0);
console.log(result); 
document.getElementById("reduce").innerHTML 
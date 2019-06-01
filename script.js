function runScript(){
   // 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
   // Using a for loop:
1A.
   var result1a = [];
   for (var i = 0; i<numbers.length; i++){
       const character = String.fromCharCode(numbers[i]);
       result1a.push(character);
   }


   document.getElementById("1a").innerHTML += " " + result1a.join(", ");
   // Using the forEach method:
1B.
// forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).


var numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

arr.forEach(function(element) {
 console.log(element);
});












   // Using the map method
Const numbers  = [];

Arr.map(function(element) {
Return element + 1
})









   // 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
   // Answer:

Const return = numbers.filter(numbers => number > 72 && number < 88);
Console.log(return);

   
   
   
     // 3. Display the product of all numbers using reduce
// Answer:

const result = numbers.reduce((a, b) => { return a + b });
console.log(result);
document.getElementById("reduce").innerHTML 
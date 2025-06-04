// lab.js this lab is about arrays and objects
// Author: Ty Brown and Zeya Hazelman
// Date: May 8 2025

function isEven(x){
  return (x % 2 == 0);
}

//test function
console. log("Is 1 even?", isEven (1));
console. log("Is 2 even?", isEven (2));

array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log("My array", array);

var result = array.map(isEven);
// lets see what happens should alternate between true and false
console.log("Test of evenness of array:", result);

var result = array.map(function(x) {
return x ** 5;
})
//should return numbers from 1-8 multiplied by 5
console.log ("Squareroot of array:", result);

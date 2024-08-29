// CIA I - Q1a
// a) Write a JavaScript function “processData” that accepts an array of numbers and a callback function. 
// The “processData” function should apply the callback to each element in the array and return a new array with the results. 
// Write a callback function square that returns the square of a number and pass it to “processData”.

// Callback function that returns the square of a number 
function square(num) { 
    return num * num; 
} 

// Function that processes an array of numbers using a callback function 
function processData(arr, callback) { 
    const result = []; 
    for (let i = 0; i < arr.length; i++) { 
        result.push(callback(arr[i])); 
    } 
    return result; 
} 

const numbers = [1, 2, 3, 4, 5]; // Input data
const squaredNumbers = processData(numbers, square); 

console.log(squaredNumbers); 

// Output: 
// > node .\1a.js
// [ 1, 4, 9, 16, 25 ]

const prompt = require('prompt-sync')(); // Import prompt-sync

// Function to get user input and convert it to an array of strings
const getUserArray = (promptText) => {
  const input = prompt(promptText);
  return input.split(',').map(name => name.trim());
};

// Function to perform an operation on the array
const performOperation = (array, operation, minLength = 0) => {
  switch (operation) {
    case 'count':
      return array.length;
    case 'filter':
      return array.filter(name => name.length >= minLength);
    case 'print':
      return array;
    default:
      return array;
  }
};

// Get user input for the arrays
const array1 = getUserArray('Enter the first array of student names (comma separated): ');
const array2 = getUserArray('Enter the second array of student names (comma separated): ');

// Merge the two arrays and remove duplicates
const mergedArray = [...array1, ...array2];
const uniqueArray = [...new Set(mergedArray)];

// Sort the unique array
const sortedArray = uniqueArray.sort();

// Prompt user to choose an operation
const operation = prompt('Choose an operation (count, filter, print): ');

let result;
if (operation === 'filter') {
  const minLength = parseInt(prompt('Enter the minimum length of names to keep: '), 10);
  result = performOperation(sortedArray, operation, minLength);
} else {
  result = performOperation(sortedArray, operation);
}

// Display the result
console.log('Result:', result);

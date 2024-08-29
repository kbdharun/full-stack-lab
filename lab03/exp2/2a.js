// Define arithmetic operations using arrow functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
};

// Function to perform calculation based on operator
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Invalid operator';
  }
};

// Prompt the user for inputs
const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));
const operator = prompt('Enter the operator (+, -, *, /): ');

// Calculate and display the result
console.log(`Result of ${num1} ${operator} ${num2} = ${calculate(num1, num2, operator)}`);

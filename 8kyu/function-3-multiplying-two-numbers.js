// FUNCTION 3-MULTIPLYING TWO NUMBERS

// Implement a function which multiplies two numbers

// my solution
function multiply(a, b) {
  return a * b 
}

// top solution 
let multiply = (a, b) => a * b

// some fancy shit with spread operator and the whole sha-bang
const multiply = (...numbers) => numbers.reduce((acc, curr) => acc * curr);


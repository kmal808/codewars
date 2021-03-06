// CONVERT A NUMBER TO A STRING

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"



// my solution 
function numberToString(num) {
  return num.toString()
}

// top solution 
function numberToString(num) {
  return num.toString();
}

// one liner 
const numberToString = num => `${num}`;
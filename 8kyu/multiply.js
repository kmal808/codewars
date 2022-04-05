// MULTIPLY

// This code does not execute properly. Try to figure out why.



// my solution 
multiply = function (a, b) {
  return a * b
}

// top solution 
multiply = (a, b) => a * b;

// if else 
function multiply(a, b){
  // typeof === number returns false for null or empty values
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return 'Please enter 2 numbers';
  }
}
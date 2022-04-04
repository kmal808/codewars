// RETURNING STRINGS

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// my solution 
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// top solution same as above

// one liner
const greet = name => `Hello, ${name} how are you doing today?`;

// regular concatination 
function greet(name){
  return "Hello, " + name + " how are you doing today?"
}



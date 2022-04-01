// JENNY'S SECRET MESSAGE

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// my solution 
function greet(name){  
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

// top solution 
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

// arrow function with ternary operator instead of if else 
let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;



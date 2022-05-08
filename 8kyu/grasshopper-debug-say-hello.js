//! GRASSHOPPER-DEBUG SAY HELLO

//* Debugging sayHello function
//* The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

//* Example output:

//* Hello, Mr. Spock



//? MY SOLUTION

const sayHello = name => `Hello, ${name}`

//? TOP SOLUTION 

function sayHello (name) {
  return 'Hello, ' +  name;
}

//? UNIQUE

let sayHello = (name) => 'Hello, '.concat(name);
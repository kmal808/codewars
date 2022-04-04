// STRING REPEAT

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


// my solution 
function repeatStr (n, s) {
  return s.repeat(n)
}

// top is same as above 

// one liner
const repeatStr = (n,s) => s.repeat(n) 

// TWICE AS OLD

// Your function takes two arguments:

//   1.  current father's age (years)
//   2.  current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// my solution 
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
return Math.abs(dadYearsOld - (2 * sonYearsOld));
}

// top solution 
const twiceAsOld = (d, s) => Math.abs(d - 2 * s)

// ternary operator solution 
function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}

// arrow function 
const twiceAsOld = (d, s) => Math.abs(d - 2 * s)


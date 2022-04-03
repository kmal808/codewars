// CONVERT NUMBER TO REVERSED ARRAY OF DIGITS

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// my solution 
function digitize(n) {
  return String(n).split('').reverse().map(Number)
}

// top solution ]
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// all kinds of stuff going on here 
const digitize = (x) => {
  x = `${x}`.split('').reverse();
  let a = []
  for(let i = 0; i < x.length; i++){
    a.push(+x[i])
  }
  return a
}
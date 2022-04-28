//! PERSISTANT BUGGER

//* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//* For example (Input --> Output):

//* 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//* 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//* 4 --> 0 (because 4 is already a one-digit number)


//? my solution 

function persistence(num) {
  let numArray = num.toString().split('')
  let count = 0
  let total
    while (numArray.length > 1) {
     total = numArray.reduce(function (sum, currentValue) {
            return sum * currentValue
        })
     count++
     numArray = total.toString().split('')
   }
  return count
}

//? top solution 

function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

//? one liner

persistence=(n,c)=>n>9?persistence(n.toString().split('').reduce((x,y)=>x*y),c?(c+1):1):c?c:0

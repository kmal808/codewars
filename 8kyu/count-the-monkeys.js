// COUNT THE MONKEYS

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]


// my solution 
function monkeyCount(n) {
  // your code here
    let result = []
  
      for (let i = 1; i <= n; i++) {
          result.push(i)
      }
  
      return result
  }


// top solution 
function monkeyCount(n) {
  var monkeys = [];
  for(var i=1; i<n+1; i++){
    monkeys.push(i);
  }
  return monkeys;
 }

 // one liner
 const monkeyCount = n => [...Array(n)].map((_, i) => i+1);
  
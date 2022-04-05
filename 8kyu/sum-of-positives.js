// SUM OF POSITIVES

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



// my solution
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
      }
  }
  return sum
}

// top solution 
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// one liner
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

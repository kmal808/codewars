// reversed sequence

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// my solution
const reverseSeq = n => {
  return Array(n).fill(0).map((a, i) => n - i )
}

// top solution using for loop 
const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };

  // interesting solution 
  const reverseSeq = length => Array.from({length}, () => length--)
  


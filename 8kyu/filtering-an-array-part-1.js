//! FILTERING AN ARRAY (PART 1)

//* We want an array, but not just any old array, an array with contents!

//* Write a function that produces an array with the numbers 0 to N-1 in it.

//* For example, the following code will result in an array containing the numbers 0 to 4:

//* arr(5) // => [0,1,2,3,4]
//* Note: The parameter is optional. So you have to give it a default value.



//? MY SOLUTION 

function arr(n) {
  let neArr = []
  for (let i = 0; i < n; i++) {
    neArr.push(i)
  }
  return neArr
}

//? TOP SOLUTION 

const arr = n => Array.from({length: n}, (_, i) => i);

//? SPREAD OPERATOR 

arr = n => n ? [...Array(n).keys()] : [];
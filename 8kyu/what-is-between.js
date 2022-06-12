//! WHAT IS BETWEEN?

//* DESCRIPTION:
//* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//* For example:

//* a = 1
//* b = 4
//* --> [1, 2, 3, 4]


//? MY SOLUTION

function between(a, b) {
  let newArr = [];
  for (let i = a; i <= b; i++)
   newArr.push(i)
   return newArr
 }

 //? TOP SOLUTION

 function between(a, b) {
  // your code here
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}

//? ONE LINER

const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i)

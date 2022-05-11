//! ODD OR EVEN?

//* Task:
//* Given a list of integers, determine whether the sum of its elements is odd or even.

//* Give your answer as a string matching "odd" or "even".

//* If the input array is empty consider it as: [0] (array with a zero).

//* Examples:
//* Input: [0]
//* Output: "even"

//* Input: [0, 1, 4]
//* Output: "odd"

//* Input: [0, -1, -5]
//* Output: "even"



//? MY SOLUTION

function oddOrEven(array) {
  const newArr = array.reduce((a,b) => a + b, 0);
  if (newArr % 2 == 0 ){
    return 'even'
  } else { return 'odd' }
};

//? TOP SOLUTION

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

//? ONE LINER

const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";
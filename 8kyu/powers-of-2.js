//! POWERS OF 2

//* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).



//? MY SOLUTION

function powersOfTwo(n){
  let powerArr = [];
  for (let i=0; i<=n; i++){
    powerArr.push(2**i);
  }
  return powerArr
}


//? TOP SOLUTION

function powersOfTwo(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}

//? ONE LINER

var powersOfTwo= n =>  [...Array(n+1)].map((x,i)=>2**i)
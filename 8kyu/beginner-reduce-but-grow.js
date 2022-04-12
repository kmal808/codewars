// BEGINNER - REDUCE BUT GROW

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



// my solution - I originally tried map and was trying to do something similar to the top soultioin but couldnt get the parameters set up correct. Went with a good ol' for loop instead and studied the top solution to use in the future. 
function grow(x){
  let sum = 1
  for(i=0; i < x.length; i++) {
    sum = sum * x[i]
  }
  return sum;
}

// top solution & one liner. 
const grow=x=> x.reduce((a,b) => a*b);

// easy to read 
function grow(x){
  return x.reduce((accumulator, currentVal) => accumulator *= currentVal, 1);
}
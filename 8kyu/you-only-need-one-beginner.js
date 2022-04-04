// YOU ONLY NEED ONE - BEGINNER

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// my solution 
function check(a,x){
  return a.includes(x)
}

// top solution 
const check = (a,x) => a.includes(x);

// for loop with some other fancy stuff 
function check(a, x) {
  let res = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
      res.push(a[i])
    }  
  }
  return res.length ? true : false;
}
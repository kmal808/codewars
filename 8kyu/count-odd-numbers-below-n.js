// COUNT ODD NUMBERS BELOW N 

// THIS ONE SAYS "EASY", BUT I SPENT MUCH LONGER THANN EASY TIME TRYING TO FIGURE IT OUT
// THE DAMN MATH FLOOR GOT ME. 

//Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// my solution 
function oddCount(n){
  return Math.floor(n/2);
}

// top solution 
const oddCount = n => Math.floor(n/2) 

// else if 
function oddCount(n){
  if (n%2 == 1){
    return (n/2) - 0.5;
  }
    else if (n%2 == 0){
      return n/2;
    }
    else {return null;}
  }

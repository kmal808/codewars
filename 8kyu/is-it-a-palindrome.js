//! IS IT A PALINDROME?

//* Write a function that checks if a given string (case insensitive) is a palindrome.



//? MY SOLUTION 

function isPalindrome(x) {
  if (x.toLowerCase() == x.split("").reverse().join("").toLowerCase()) {
    return true;
  }
  else {
  return false;
  }
}

//? TOP SOLUTION

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

//? ONE LINER

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
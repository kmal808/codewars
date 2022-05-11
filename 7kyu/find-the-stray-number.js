//! FIND THE STRAY NUMBER

//* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//* Complete the method which accepts such an array, and returns that single different number.

//* The input array will always be valid! (odd-length >= 3)

//* Examples
//* [1, 1, 2] ==> 2
//* [17, 17, 3, 17, 17, 17, 17] ==> 3



//? MY SOLUTION

function stray(numbers) {
  const arr = numbers.sort((a,b) => a -b) 
  if (arr[0] == arr[1]) {
    return arr[arr.length-1]
  } else {
    return arr[0]
  }
}

//? TOP SOLUTION 

function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

//? ONE LINER

const stray = nums => nums.reduce((a, b) => a ^ b);
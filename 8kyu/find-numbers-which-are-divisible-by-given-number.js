//! FIND NUMBERS WHICH ARE DIVISIBLE BY GIVEN NUMBER

//* Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

//* Example
//* divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]



//? my solution 

function divisibleBy(numbers, divisor){
  return numbers.filter(el => el % divisor === 0)
}

//? top solution 

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}

//? one liner

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
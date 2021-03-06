//! CREATE PHONE NUMBER

//* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//* Example
//* createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//* The returned format must be correct in order to complete this challenge.
//* Don't forget the space after the closing parentheses!

//? my solution 
function createPhoneNumber(numbers){
  let phoneNum = '(xxx) xxx-xxxx';
  for (let i = 0; i < numbers.length; i++){
  
    phoneNum = phoneNum.replace('x', numbers[i]);
  }
  return phoneNum;
}

//? top solution 
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

//? one liner
var createPhoneNumber=n=>n.map((v,i)=>(i?i-3?i-6?"":"-":") ":"(")+v).join``


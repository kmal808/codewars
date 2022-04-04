// CONVERT A STRING TO A NUMBER

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// my solution
let stringToNumber = function(str){
  let myString = parseFloat(str)
  return myString
}

// top solution 
var stringToNumber = function(str){
  return parseInt(str);
}

// dang I wish I would have done it this way
var stringToNumber = function(str){
  // put your code here
  return Number(str);
}
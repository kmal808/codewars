//! THIRD ANGLE OF A TRIANGLE

//* You are given two interior angles (in degrees) of a triangle.

//* Write a function to return the 3rd.

//* Note: only positive integers will be tested.


//? my solution

function otherAngle(a, b) {
  return 180-(a+b)
}

//? top solution 

function otherAngle(a, b) {
  return 180-(a+b);
}

//? one liner

const otherAngle = (a, b) => 180 - a - b


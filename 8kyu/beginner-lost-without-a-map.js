// BEGINNER LOST WITHOUT A MAP

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// my solution 
function maps(x){
  let doubledNumbers = x.map(n => n*2)
  return doubledNumbers
  }

// top solution
function maps(x){
  return x.map(n => n * 2);
}

// for loop 
function maps(x){
  //return x.map(el => el * 2);
  let arr = [];
  for(let i = 0; i < x.length; i++){
  arr.push(x[i] * 2);
  }
  return arr;
  }


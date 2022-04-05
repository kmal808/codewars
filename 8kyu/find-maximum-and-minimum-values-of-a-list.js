// FIND MAXIMUM AND MINIMUM VALUES OF A LIST 


// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.




// my solution 
let min = function(list){
  return Math.min(...list)
}

let max = function(list){
  
  return Math.max(...list)
}

// top solution 
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// using sort instead of Math.min or .max
var min = function(list){
  list.sort((a, b) => (a - b));
  return list[0];
}

var max = function(list){
  list.sort((a, b) => (b - a));
  return list[0];
}
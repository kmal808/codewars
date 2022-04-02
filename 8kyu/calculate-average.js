// CALCULATE AVERAGE

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// my solution - not elegant but it got done and it's easy to understand/read
function find_average(array) {
  if (array.length == 0) {
    return 0
  } else {
    return array.reduce((x, y) => x + y, 0) / array.length;
  }
}

// top solution 
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

// second on the list with else if and a for loop 
function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}

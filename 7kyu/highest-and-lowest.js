// HIGEST AND LOWEST

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// my solution-trying to get clever 
highAndLow = function(x) {
  let newArray = x.split(' ').map(function(item) {
    return Number(item)
  })

  return `${Math.max(...newArray)} ${Math.min(...newArray)}`
}

// top solution 
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// long one, but easy to read/understand
function highAndLow(numbers){

  var numArray = numbers.split(" ");
  var max      = Number(numArray[0]);
  var min      = Number(numArray[0]);
  var num;
  
  for(var i = 1; i< numArray.length; i++){
  
    num = Number(numArray[i]);
    
    if(num > max) max = num;
    if(num < min) min = num;
  }
  
  return max + " " + min;
  
  }
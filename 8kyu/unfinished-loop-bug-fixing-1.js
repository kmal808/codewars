//! UNFINISHED LOOP - BUG FIXING #1

//* Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

//* We were given the following code with the task of correcting it. 

// function createArray(number){
//   var newArray = [];
  
//   for(var counter = 1; counter <= number){
//     newArray.push(counter);
//   }
  
//   return newArray;
// }

//? my and top solution 

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter)
  }
  
  return newArray
}

//? one liner

const createArray = n => Array(...Array(n)).map((v, i) => i + 1);
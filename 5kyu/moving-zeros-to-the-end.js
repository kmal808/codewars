//! MOVING ZEROS TO THE END

//* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//* moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


//? my solution 

function moveZeros(arr) {
  for(let i = arr.length; i--;) {
      if(arr[i]===0) {
        arr.splice(i, 1)
        arr.push(0)
      }
    } return arr
  }

//? top solution 

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

//? one liner

let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));

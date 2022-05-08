//! SQUASH THE BUGS

//* Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

//* There will only be one 'longest' word.



//? WE WERE GIVEN BROKEN CODE WITH THE TASK OF FIXING IT

//? CORRECTED CODE

function findLongest(str) {
  
  var spl = str.split(" ")
  var longest = 0
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }

  return longest
}

//? CLEVER SOLUTION

const findLongest = s => Math.max(...s.split(" ").map(x => x.length))




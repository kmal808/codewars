// A NEEDLE IN THE HAYSTACK 

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// my solution 
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle")
}

// top solution is same as above

// while loop with an if statement
function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == 'needle') {
      return 'found the needle at position ' + i;
    }
    i++;  
  }
}


//! REMOVE EXCLAMATION MARKS

//* Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


//? my solution 

function removeExclamationMarks(s) {
  return s.replace(/!/g, '')
}

//? top solution 

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

//? one liner

const removeExclamationMarks = s => s.replace(/!/g,"") ;

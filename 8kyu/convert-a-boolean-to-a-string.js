// CONVERT A BOOLEAN TO A STRING 

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// my solution 
function booleanToString(b) {

  if (b == true) {
      return 'true'
  } else {
      return 'false'
  }
}

// top solution 
function booleanToString(b){
  return b.toString();
}

// clever
function booleanToString(b){
  if (typeof b == 'boolean') {
    return String(b);
  }
}

// one liner 
const booleanToString = b => b ? 'true' : 'false';
// REMOVE STRING SPACES

// Simple, remove the spaces from the string, then return the resultant string.

// my solution 
function noSpace(x){return x.split(' ').join('')}

// top solution 
function noSpace(x){
  return x.replace(/\s/g, '');
}

// for loop and if statement 
function noSpace(x){
  var result = ""
  for(var index = 0; index < x.length; index++){
    if(x[index] !== " "){
      result += x[index];
    }
  }
  return result;
}
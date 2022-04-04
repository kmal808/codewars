// CONVERT A STRING TO AN ARRAY

// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// my solution 
function stringToArray(string){
  return string.split(' ')
}

// top solution same as above

// one liner
const stringToArray = string => string.split(' ');

// for loop with and if statement 
function stringToArray(string){
  let arr = string.split(' ')
    for(let i = 0; i < arr.length; i++){
      if (arr[i] == ""){
        arr[i] = [];
      }
    } return arr
}
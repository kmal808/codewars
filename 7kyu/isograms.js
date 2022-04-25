//! ISOGRAMS

//* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//* Example: (Input --> Output)

//* "Dermatoglyphics" --> true
//* "aba" --> false
//* "moOse" --> false (ignore letter case)  


//? my solution 

function isIsogram(str){
  str = str.toLowerCase()
  for (let i = 0; i < str.length - 1; i++) {
     for (let k = i + 1; k < str.length; k++) {
       if (str[i] === str[k]) {
         return false
      }
    }
  }
  return true
}

//? top solution 

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

//? one liner

const isIsogram = str => !str.toLowerCase().split('').some((x,i,arr) => arr.indexOf(x) !== arr.lastIndexOf(x));
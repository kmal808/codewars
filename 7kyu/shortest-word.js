//! SHORTEST WORD

//* Simple, given a string of words, return the length of the shortest word(s).

//* String will never be empty and you do not need to account for different data types.


//? my solution 

function findShort(s){
  let arr = s.split(' ')
  let shortWord = arr[0].length
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length < shortWord) {
      shortWord = arr[i].length
    }
  }
  return shortWord
}

//? top solution 

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

//? one liner

const findShort = (s) =>  s.split(' ').reduce((r,c) => c.length < r ? c.length : r, s.length);
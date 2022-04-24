//! EXES AND OHS

//* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//* Examples input/output:

//* XO("ooxx") => true
//* XO("xooxx") => false
//* XO("ooxXm") => true
//* XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//* XO("zzoo") => false

//? my solution 

function XO(str) {
  str = str.toLowerCase().split('')
  if (str.filter(x => x === 'x').length === str.filter(x => x === 'o').length) {
    return true
  } else {
   return false
  }
}

//? top solution 

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//? one liner

XO = s => (s += 'xo').match(/x/gi).length === s.match(/o/gi).length;
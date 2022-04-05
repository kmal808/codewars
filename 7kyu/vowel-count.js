// VOWEL COUNT

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



// my solution 
function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length
 }

 // top solution 
 function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

// one liner
const getCount = str => str.replace(/[^aeiou]/g, '').length;

//! REVERSED WORDS

//* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//* Examples
//* "This is an example!" ==> "sihT si na !elpmaxe"
//* "double  spaces"      ==> "elbuod  secaps"



//? MY SOLUTION

function reverseWords(str) {
  const arr = str.split('').reverse().join('')
  const reversedArr = arr.split(' ').reverse().join(' ')
  return reversedArr
}

//? TOP SOLUTION

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

//? ONE LINER
var reverseWords = (str) => str.split(" ").map(word => word.split('').reverse().join('')).join(" ")
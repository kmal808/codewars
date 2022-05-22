//! VOWEL REMOVER

//* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//* Examples
//* "hello"     -->  "hll"
//* "codewars"  -->  "cdwrs"
//* "goodbye"   -->  "gdby"
//* "HELLO"     -->  "HELLO"
//* don't worry about uppercase vowels
//* y is not considered a vowel for this kata


//? MY SOLUTION 

function shortcut(string){
  return string.replace(/[aeiou]/gi, '');
}

//? TOP SOLUTION 

function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

//? ONE LINER

const shortcut = string => string.replace( /[euioa]/g, '' );
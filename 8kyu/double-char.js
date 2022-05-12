//!  DOUBLE CHAR

//* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//* Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "



//? MY SOLUTION 

function doubleChar(str) {
  return str.split('').map(x=>`${x}${x}`).join('')
}

//? TOP SOLUTION 

const doubleChar = (str) => str.split("").map(c => c + c).join("");

//? ONE LINER (CLEVER)

const doubleChar = str => [...str].map(i => i + i).join('')



//! IS THE STRING UPPERCASE?

//* Is the string uppercase?
//* Task
//* Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

//* "c".isUpperCase() == false
//* "C".isUpperCase() == true
//* "hello I AM DONALD".isUpperCase() == false
//* "HELLO I AM DONALD".isUpperCase() == true
//* "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
//* "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
//* In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.



//? my solution 

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}

//? top solution 

String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

//? interesting solution 

String.prototype.isUpperCase  = function(_str){
  return this.split("").every(function(c){return c === c.toUpperCase();});
}






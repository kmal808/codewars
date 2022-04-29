//! CONVERT STRING TO CAMEL CASE

//* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

//* Examples
//* "the-stealth-warrior" gets converted to "theStealthWarrior"
//* "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


//? my solution

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
}

//? top solution 

function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}

//? one liner

let toCamelCase = s => s.replace(/[-_](.)/g, (m, v) => v.toUpperCase())
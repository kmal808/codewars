//! VALID PARENTHESES

//* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

//* Examples
//* "()"              =>  true
//* ")(()))"          =>  false
//* "("               =>  false
//* "(())((()())())"  =>  true

//? my solution

function validParentheses(parens){
  let num = 0;
          for(var i=0;i<parens.length;i++){
            if(parens[i] == "("){
              num++
            }
            if(parens[i] == ")"){
              num--
            }
            if(num<0){
              return false;
            }
          }
          return num == 0
  }

//? top solution

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

//? one liner

const validParentheses = parens =>
  ![...parens].reduce((pre, val) => (pre + val).replace(`()`, ``), ``);


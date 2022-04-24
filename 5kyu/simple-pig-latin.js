//! SIMPLE PIG LATIN 

//* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//* Examples
//* pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//* pigIt('Hello world !');     // elloHay orldway !


//? my solution 

function pigIt(str){
  str = str.split(' ')
  for (let i = 0; i < str.length; i++) {
    if (str[i].match("[a-zA-Z]+")) {
      str[i] = str[i].slice(1, str[i].length) + str[i][0] + 'ay'
    }
  }
  return str.join(' ')
}

//? top solution 

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

//? one liner

const pigIt = s => s.replace(/(\w)(\w*)/g, '\$2\$1ay');

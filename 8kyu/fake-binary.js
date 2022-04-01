// FAKE BINARY 

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// my solution 
function fakeBin(x){
  return x.split("").map(num => num < 5 ? '0' : '1').join("");
}

// top solution
function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// for loop with if else 
function fakeBin(str){
  var newStr = "";
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;
}

// for loop without if else, and ternary operator instead
function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
}

// ! SQUARE EVERY DIGIT

// ? Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// ? For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// ? Note: The function accepts an integer and returns an integer

// ** my solution 

function squareDigits(num){
  const stringOfNum = num.toString()
  const sum = []
  for (let i = 0; i < stringOfNum.length; i++) {
    sum[i] = stringOfNum[i] * stringOfNum[i]
  }
  return Number(sum.join(''))
}

// ** top solution

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

// ** one liner

const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));

// BEGINNER SERIES #2 CLOCK 

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// figuring out the math equation was harder than figuring out the program 
// my solution 
function past(h, m, s){
  const hours = h * 60 * 60 * 1000;
  const minutes = m * 60 * 1000;
  const seconds = s * 1000;
  
  return hours + minutes + seconds;
}

// top solution 
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

// if else 
function past(h, m, s){
  if (0 <= h && h<= 23 && 0 <= m && m<= 59 && 0 <= s && s<= 59){
    return 1000 * (h * Math.pow(60, 2) + m * 60 + s);
  } else {
    return "Incorect input!";
  }
}

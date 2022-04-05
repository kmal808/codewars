// REVERSED STRINGS

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



// my solution 
function solution(str){
  return str.split('').reverse().join('')
}

// top solution is same as above

// one liner
const solution = str => str.split('').reverse().join('');

// for of loop 
function solution(str){
  let n = ''
  for(let i of str){
    n = i+n
  }
  return n
}
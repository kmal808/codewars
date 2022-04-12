// CHECK SAME CASE

// Write a function that will check if two given characters are the same case.

// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


// my solution 
sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1

// top solution 
function sameCase(a, b){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
  
  const checkCase = x => {
    if(x === x.toLowerCase()) return 'lower'
    if(x === x.toUpperCase()) return 'upper'
  }

  return checkCase(a) === checkCase(b) ? 1 : 0
}

// I was trying to solve it this way but couldnt get it to work in under 20 minutes so used regex to get it done. 
function sameCase(a, b){
  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
     return -1
   }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
       return 1
   }else{
     return 0
   }
 }
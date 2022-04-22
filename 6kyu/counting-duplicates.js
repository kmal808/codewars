//! COUNTING DUPLICATES

//* Count the number of Duplicates
//* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//* Example
//* "abcde" -> 0 # no characters repeats more than once
//* "aabbcde" -> 2 # 'a' and 'b'
//* "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//* "indivisibility" -> 1 # 'i' occurs six times
//* "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//* "aA11" -> 2 # 'a' and '1'
//* "ABBA" -> 2 # 'A' and 'B' each occur twice


//? my solution 

function duplicateCount(text){
  let arr = text.split("").map(item => item.toLowerCase())   
  let count = []
  
  for (i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i], i + 1) !== -1 && count.includes(arr[i]) === false) {
      count.push(arr[i])
    }
  }
  return count.length
  }

  //? top solution 

  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }

  //? one liner
  const duplicateCount = (text) => (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;
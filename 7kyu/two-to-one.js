//! TWO TO ONE 

//* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//* Examples:
//* a = "xyaabbbccccdefww"
//* b = "xxxxyyyyabklmopq"
//* longest(a, b) -> "abcdefklmopqwxy"

//* a = "abcdefghijklmnopqrstuvwxyz"
//* longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//? MY SOLUTION

function longest(s1, s2) {
  let newArr = [...new Set((s1+s2).split(''))]
  return newArr.sort().join('')
}

//? TOP SOLUTION

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//? COOL SOLUTION 

function longest(s1, s2) {
  let arr = [...s1, ...s2]
  return arr.filter((n, i) => arr.includes(n) && arr.indexOf(n) == i).sort().join('')
}

//? ANOTHER COOL ONE 

function longest(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split('').sort();

  for (let i = 0; i <= array.length; i++) {
      console.log(array[i]);//test
      if (!output.includes(array[i]) ) {
            output.push(array[i]);
      }
  }
  return output.join('');
}
console.log(longest('xyaaAbbbccccdefww', 'xxxxyyyyabklmopq'));
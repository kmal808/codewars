//! SUM OF NUMBERS

//* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//* Note: a and b are not ordered!

//* Examples (a, b) --> output (explanation)
//* (1, 0) --> 1 (1 + 0 = 1)
//* (1, 2) --> 3 (1 + 2 = 3)
//* (0, 1) --> 1 (0 + 1 = 1)
//* (1, 1) --> 1 (1 since both are same)
//* (-1, 0) --> -1 (-1 + 0 = -1)
//* (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


//? my solution 

function getSum( a,b ) {
  let one = Math.min(a, b)
  let two = Math.max(a, b)
 return (two - one + 1) * (one + two) / 2
}

//? top solution

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

//? one liner

const GetSum= (a, b, x=Math.min(a,b), y=Math.max(a,b)) => (y-x+1)*(x+y)/2
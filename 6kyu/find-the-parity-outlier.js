//! FIND THE PARITY OUTLIER

//* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//* Examples
//* [2, 4, 0, 100, 4, 11, 2602, 36]
//* Should return: 11 (the only odd number)

//* [160, 3, 1719, 19, 11, 13, -21]
//* Should return: 160 (the only even number)


//? my solution 

function findOutlier(integers){
  const odd = []
  const even = []
  for (let integer of integers) {
    if (integer % 2 === 0) {
      even.push(integer)
    } else {
      odd.push(integer)
    }
  }
  return odd.length === 1 ? odd[0] : even[0]
}

//? top solution

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

//? one liner

findOutlier=a=>(a=>a[0]%2==a[1]%2?a[a.length-1]:a[0])(a.sort((a,b)=>Math.abs(a%2)-Math.abs(b%2)))
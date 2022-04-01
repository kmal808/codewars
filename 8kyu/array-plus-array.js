// Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// my solution 
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a,b)=>a+b,0)+arr2.reduce((a,b)=>a+b,0); //something went wrong
}

// top solution
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// using for loops
function arrayPlusArray(arr1, arr2) {
  var suma=0;
  for(var i=0;i<arr1.length;i++)
    suma+=arr1[i];
  for(var i=0;i<arr2.length;i++)
    suma+=arr2[i];
  return suma;
}


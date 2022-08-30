//! Training JS #16: Methods of String object--slice(), substring() and substr()

//* Task

//* Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

//* The first mission: Traversing arr, find the shortest string length.

//* The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

//* for example:

//* cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
//* cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
//* cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

//? P = accepts 1 parameter arr, which is an array of strings
//? R = return and array of strings equalling the length of the shortest string in arr
//? E = empty array, array of another data type, ....
//? P = iterate through the array to find the element with the shortest string. Iterate through the array again checking all of the elements to see if they're shorter than the shortest element. Return a new string array all equal in length to the shortest element in the parameter arr.

//? my solution

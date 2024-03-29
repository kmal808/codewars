//! Training JS #16: Methods of String object--slice(), substring() and substr()

// Task

// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

//* my solution

const cutIt = (arr) => {
	const shortestLength = Math.min.apply(
		null,
		arr.map((x) => x.length)
	)
	return arr.map((x) => x.slice(0, shortestLength))
}

//* top solution

function cutIt(arr) {
	var smallest = arr[0].length
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length < smallest) {
			smallest = arr[i].length
		}
	}
	var map = arr.map(function (x) {
		return x.slice(0, smallest)
	})
	return map
}

//* one liner and clever af

const cutIt = (arr) =>
	arr.map((element) =>
		element.slice(0, Math.min(...arr.map((element) => element.length)))
	)

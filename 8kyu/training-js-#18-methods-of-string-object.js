//! Training JS #18: Methods of String object--concat() split() and its good friend join()

//* Task

//* Implement a function which accepts 2 arguments: string and separator.

//* The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

//! For example:

//* splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
//* splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
//* splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
//* splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

//? P = function takes in two arguments. arg1 = string, arg2 = separator
//? R = return arg1 separated by arg2 leaving spaces intact
//? E = input other than a string, args other than expected
//? P = split arg1 into an array of words, split that new array into an array of characters, join them back together with arg2 as the parameter passes to join

//! my solution

const splitAndMerge = (string, separator) => {
	const wordArr = string.split(' ')
	const res = []
	for (let i = 0; i < wordArr.length; i++) {
		const temp = wordArr[i].split('')
		for (let j = 0; j < temp.length; j++) {
			res.push(temp[j])
		}
		console.log(res)
	}
	return +res.join(separator)
}

//! refactored with dot map
const splitAndMerge = (string, separator) =>
	string
		.split(' ')
		.map((word) => word.split('').join(separator))
		.join(' ')

//! top solution
function splitAndMerge(str, sp) {
	return str
		.split(' ')
		.map((word) => word.split('').join(sp))
		.join(' ')
}

//! nice with the spread operator
const splitAndMerge = (str, sp) =>
	str
		.split(' ')
		.map((x) => [...x].join(sp))
		.join(' ')

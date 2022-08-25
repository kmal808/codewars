//! STRING ENDS WITH

//* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//* Examples:

//* solution('abc', 'bc') // returns true
//* solution('abc', 'd') // returns false

//? PREP
//? P = takes in two args, both strings.
//? R = return true if first arg ends with the second arg
//? E = empty string, second string has a greater length than the first
//? P = compare arg1 against arg2 starting at a postion of arg2.length

//* MY SOLUTION
const solution = (str, ending) => str.endsWith(ending)

//* TOP SOLUTION
function solution(str, ending) {
	return str.endsWith(ending)
}

//* CLEVER AF
function solution(str, ending) {
	return str.slice(0 - ending.length) === ending
}

//* WTF LOL
function solution(str, ending) {
	return (
		str
			.split('')
			.reverse()
			.join('')
			.search(ending.split('').reverse().join('')) === 0
	)
}

//* OR....
function solution(str, ending) {
	let strArray = str.split('')
	let endArray = ending.split('')
	let wasteArrayLength = strArray.length - endArray.length
	let newArray = []

	for (let i = wasteArrayLength; i < strArray.length; i++) {
		newArray.push(strArray[i])
	}

	let newEnding = endArray.join()
	let newString = newArray.join()

	if (newString == newEnding) {
		return true
	} else {
		return false
	}
}

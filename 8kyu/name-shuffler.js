//! Name Shuffler

//* Write a function that returns a string in which firstname is swapped with last name.

//* Example(Input --> Output)

//* "john McClane" --> "McClane john"

//? P = take in a string consisting of a first name and last name
//? R = return the first name after the last name
//? E = whitespace, string casing
//? P = break the string into two separate parts, first name and last name, reverse them, reconnect them, return

//* My solution
const nameShuffler = (str) => str.split(' ').reverse().join(' ')

//* top solution
function nameShuffler(str) {
	return str.split(' ').reverse().join(' ')
}

//* clean and easy to read
function nameShuffler(str) {
	const arr = str.split(' ')
	const shuffledName = arr.reverse()
	return shuffledName.join(' ')
}

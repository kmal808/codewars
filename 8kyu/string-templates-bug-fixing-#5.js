//! String Templates - Bug Fixing #5

//* Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//? P - something wrong with the provided code
//? R - return the working code
//? E - non string test cases
//? P - look for errors, type-o's and wrong syntax

//? MY SOLUTION
function buildString(...template) {
	return `I like ${template.join(', ')}!`
}

//? TOP SOLUTION SAME AS ABOVE

//? ONE LINER
const buildString = (...template) => `I like ${template.join(', ')}!`

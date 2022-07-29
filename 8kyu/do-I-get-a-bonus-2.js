//! DO I GET A BONUS

//* It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

//* Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

//* If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

//* Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

//? PREP //
//! PARAMETERS:
//? Two variables. Take in a number & boolean. boolean will determine the output of the function.
//! RETURN
//? return the total amount (with bonus if applicable) as a string prefixed with pound or dollar sign.
//! EXAMPLES
//? (1000, true) = '$10000'
//? (20000, false) = '$20000'
//? (300, true) = '$3000'
//! PSUEDO-CODE
//? check bonus for true or fasle
//? if bonus is true, multiply salary by 10
//? if bonus is false, return salary only
//? return salary as a string prefixed by the '$'

//* MY SOLUTION
const bonusTime = (salary, bonus) => (bonus ? '$' + salary * 10 : '$' + salary)

//* TOP SOLUTION
function bonusTime(salary, bonus) {
	return bonus ? `£${10 * salary}` : `£${salary}`
}

//* ONE LINER
const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`

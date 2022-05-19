//! HELLO, NAME OR WORLD

//* Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

//* Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

//* Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//*   or `name` = ""        => return "Hello, World!"



//? MY SOLUTION 

function hello(name) {
  if (name === '' || name === undefined) {
      return 'Hello, World!';
  } else {
      return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
  }
}

//? TOP SOLUTION 

const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

//? ONE LINER

hello = n => `Hello, ${(n = (n = n > '' ? n : 'world').toLowerCase()).charAt(0).toUpperCase() + n.slice(1)}!`
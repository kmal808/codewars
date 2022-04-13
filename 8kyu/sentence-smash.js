// ** SENTENCE SMASH 
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'



// my solution -- I tried toString first, passing the space through a parameter but it did't give me the spaces so I looked up alternative methods and saw that join could do exactly that. 
function smash (words) {
   
  return words.join(" ")
  
}

// top solution 
smash = function (words) {
  return words.join(" ");
};

// one liner
const smash = words => words.join(' ');
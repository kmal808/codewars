// GET THE MEAN OF AN ARRAY

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// my solution 
function getAverage(marks){
  return Math.floor(marks.reduce((x,y)=>x+y)/marks.length)
}

// top solution 
const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length)

// for loop 
function getAverage(marks){

  // calculates total number of marks
  var total = 0;
  for(var i = 0; i < marks.length; i++){
    total += marks[i];
  }
  
  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
  return Math.floor(total / marks.length);
}


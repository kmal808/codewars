// QUARTER OF THE YEAR

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// my solution - big ass else if 
const quarterOf = (month) => {
  if(month <= 3){
    return 1;
  } else if(month <= 6){
     return 2;
  } else if(month <= 9){
     return 3;
  } else {
     return 4;
  }
}

// top solution 
const quarterOf = m => Math.ceil(m/3)

// switch which imo is way harder to read and def way longer than either of the above solutions
const quarterOf = (month, quarter = 4) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;
    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;
    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;
  }
  return quarter;
}



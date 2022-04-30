//! GET PLANET NAME BY ID

//* The function is not returning the correct values. Can you figure out why?

//* Example (Input --> Output ):

//* 3 --> "Earth"

//* In this kata we were given a function with an already written switch statement. Challenge was to correct the statement so the function worked. 


//? my solution 

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

//? another solution 

function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}

//? of course there's a one liner :)

const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];
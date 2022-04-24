//! TOTAL AMOUNT OF POINTS

//* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

//* For example: ["3:1", "2:2", "0:1", ...]

//* Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

//* if x > y: 3 points
//* if x < y: 0 point
//* if x = y: 1 point
//* Notes:

//* there are 10 matches in the championship
//* 0 <= x <= 4
//* 0 <= y <= 4


//? my solution 

function points(games) {
  let total = 0;
  for (let i = 0; i < games.length; ++i) {
      if (games[i][0] > games[i][2])
          total += 3;
      if (games[i][0] == games[i][2])
          total += 1;
  }
  return total
}

//? top solution 

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

//? one liner

const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)
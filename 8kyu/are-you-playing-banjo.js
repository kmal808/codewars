// ARE YOU PLAYING BANJO 

// my solution 
function areYouPlayingBanjo(name) {
  if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    return `${name} plays banjo`;
  } else return `${name} does not play banjo`;
}

// top solution 
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// arrow function with ternary operator
const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");

//! HUMAN READABLE TIME

//* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//* HH = hours, padded to 2 digits, range: 00 - 99
//* MM = minutes, padded to 2 digits, range: 00 - 59
//* SS = seconds, padded to 2 digits, range: 00 - 59
//* The maximum time never exceeds 359999 (99:59:59)

//* You can find some examples in the test fixtures.


//? my solution 

function humanReadable (seconds) {
  let hour, min, sec, rs
      hour = Math.floor(seconds / 3600) < 10 ? '0' + Math.floor(seconds / 3600) : Math.floor(seconds / 3600)
      rs = seconds % 3600;
      min = Math.floor(rs / 60) < 10 ? '0' + Math.floor(rs / 60) : Math.floor(rs / 60)
      sec = rs % 60 < 10 ? '0' + rs % 60 : rs % 60
      return hour + ':' + min + ':' + sec
  }

//? top solution 

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

//? one liner

let humanReadable =s=> [s/3600|0,s/60%60|0,s%60].map(i=>`${i}`.padStart(2,0)).join`:`
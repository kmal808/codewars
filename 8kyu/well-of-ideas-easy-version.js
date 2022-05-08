//! WELL OF IDEAS-EASY VERSION

//* For every good kata idea there seem to be quite a few bad ones!

//* In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



//? MY SOLUTION

function well(x){
  const count = x.reduce((s, v) => s + (v == 'good'), 0)
  if (count == 2 || count == 1) return "Publish!"
  if (count > 2) return "I smell a series!"
  if (count == 0) return "Fail!"
}

//? TOP SOLUTION

const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

//? ONE LINER

const well = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';
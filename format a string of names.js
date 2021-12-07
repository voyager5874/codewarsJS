// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns '

function list(names) {
  let len = names.length;
  if (!len) return "";
  if (len === 1) return names[0].name;
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(names[i].name);
  }
  return `${res.slice(0, -1).join(", ")} & ${res[len - 1]}`;
}

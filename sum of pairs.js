function sumPairs(ints, s) {
  const seen = {};
  debugger;
  for (let i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true;
  }
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
//[1, 7],

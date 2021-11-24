function rowSumOddNumbers(n) {
  if (n === 1) return 1;
  let count = n;
  for (let i = n - 1; i >= 1; i--) {
    count += n - i;
  }

  let i = 0;
  let numberOfOdds = 0;
  let arrOfOdds = [];
  while (numberOfOdds < count) {
    if (i % 2 !== 0) {
      numberOfOdds++;
      arrOfOdds.push(i);
    }
    i++;
  }
  let len = arrOfOdds.length;
  return arrOfOdds
    .slice(len - n)
    .reduce((total, current) => total + current, 0);
}

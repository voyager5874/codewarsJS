function findUnique(numbers) {
  const counts = {};
  for (const num of numbers) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const key = Object.keys(counts).find((key) => counts[key] === 1);
  return parseInt(key);
}

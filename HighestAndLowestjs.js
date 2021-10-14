function highAndLow(numbers) {
  // ...
  const numbersArray = numbers.split(" ").map(Number);
  return [Math.max(...numbersArray), Math.min(...numbersArray)].join(" ");
}

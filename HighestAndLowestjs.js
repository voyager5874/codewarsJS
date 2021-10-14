function highAndLow(numbers) {
  const array = numbers.split(" ").map((item) => Number(item));
  let [min, max] = array.reduce(
    ([prevMin, prevMax], curr) => [
      Math.min(prevMin, curr),
      Math.max(prevMax, curr),
    ],
    [Infinity, -Infinity]
  );
  return `${max} ${min}`;
}

//https://stackoverflow.com/a/63514134/9513184
// truth be told I haven't got it

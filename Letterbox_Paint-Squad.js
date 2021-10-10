let paintLetterboxes = function (start, end) {
  const boxesNumbers = [];
  const result = Array(10).fill(0);
  for (let i = start; i <= end; i++) {
    boxesNumbers.push(i);
  }
  console.log(boxesNumbers);
  boxesNumbers.map((number) => {
    String(number)
      .split("")
      .map(Number)
      .map((digit) => (result[digit] += 1));
  });
  return result;
};

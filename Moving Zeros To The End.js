const moveZeros = function (arr) {
  const noZeroes = arr.filter((item) => item !== 0);
  const zeroes = arr.filter((item) => item === 0);
  return [...noZeroes, ...zeroes];
};

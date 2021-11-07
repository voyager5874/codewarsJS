function sortArray(array) {
  const sortedOdd = array
    .filter((item) => item % 2 !== 0)
    .sort((a, b) => a - b);
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = sortedOdd[j];
      j++;
    }
  }
  return array;
}

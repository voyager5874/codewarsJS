var maxSequence = function (array) {
  console.log(array);
  if (array.length === 0 || array.every((item) => item < 0)) return 0;
  let currentSum = array[0];
  let maxSum = currentSum;
  const n = array.length;
  for (let i = 1; i < n; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

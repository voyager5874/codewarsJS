function findOutlier(integers) {
  const odd = integers.filter((item) => item % 2 !== 0);
  const even = integers.filter((item) => item % 2 === 0);
  return odd.length < even.length ? odd[0] : even[0];
}

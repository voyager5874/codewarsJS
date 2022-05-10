function orderWeight(input) {
  if (input.length === 0) return "";
  const array = input.split(" ");
  const processedArray = array.map((item) => ({
    raw: item,
    sum: item
      .split("")
      .map(Number)
      .reduce((acc, current) => acc + current),
  }));
  processedArray.sort((a, b) => {
    if (a.sum - b.sum === 0) {
      if (a.raw > b.raw) return 1;
      if (a.raw < b.raw) return -1;
    }
    return a.sum - b.sum;
  });
  return processedArray.map((item) => item.raw).join(" ");
}

function persistence(num) {
  let arr = (number) => `${number}`.split("").map(Number);
  if (arr(num).length === 1) return 0;
  let i = 0;
  let n = num;
  while (arr(n).length > 1) {
    n = arr(n).reduce((total, current) => {
      return (total *= current);
    }, 1);
    i++;
  }
  return i;
}

function digital_root(n) {
  let arr = n.toString().split("").map(Number);
  let sum;
  do {
    sum = arr.reduce((total, current) => {
      return total + current;
    }, 0);
    arr = sum.toString().split("").map(Number);
  } while (arr.length > 1);
  return sum;
}

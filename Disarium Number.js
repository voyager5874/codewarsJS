function disariumNumber(n) {
  const array = n.toString().split("").map(Number);
  let sumOfPows = array.reduce((total, current, index, array) => {
    return total + Math.pow(current, index + 1);
  }, 0);
  return sumOfPows === n ? "Disarium !!" : "Not !!";
}

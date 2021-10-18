function jumpingNumber(n) {
  const array = n.toString().split("").map(Number);
  if (array.length === 1) {
    return "Jumping!!";
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (Math.abs(array[i] - array[i + 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

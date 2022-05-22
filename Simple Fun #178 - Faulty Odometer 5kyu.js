function faultyOdometer(n) {
  let result = 0;
  const digits = [...String(n)];
  digits.reverse();
  for (let i = 0; i < digits.length; i++) {
    result =
      digits[i] > 4
        ? (result += (digits[i] - 1) * Math.pow(9, i))
        : (result += digits[i] * Math.pow(9, i));
  }
  return result;
}

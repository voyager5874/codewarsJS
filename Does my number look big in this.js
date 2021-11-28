function narcissistic(value) {
  const splitInput = `${value}`.split("").map(Number);
  if (splitInput.length === 1) return true;
  return (
    splitInput.reduce(
      (total, current) => total + Math.pow(current, splitInput.length),
      0
    ) === value
  );
}

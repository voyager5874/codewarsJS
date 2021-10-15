let memo = {};
function fibonacci(n) {
  if (n in memo) {
    return memo[n];
  } else {
    if (n <= 1) {
      memo[n] = n;
    } else {
      memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return memo[n];
  }
}

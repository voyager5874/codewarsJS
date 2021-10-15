const fibonacci = (function () {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n <= 1) {
        cache[n] = n;
      } else {
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      }
      return cache[n];
    }
  };
})();

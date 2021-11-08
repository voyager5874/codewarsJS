function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}

// ^ is XOR, and when you XOR two numbers, only bits that are different
// between them become 1's in the result, so XOR'ing a number with itself will always result in 0.
// The reduce method reduces an array to a single value by applying the supplied
// function to each element in the array, for example if the function was adding two
// numbers together the result would be the sum of the array. If you XOR all the numbers
// in the array together, and all but one are duplicates, then each duplicate cancels itself
// out in the process, and only the unique number remains.

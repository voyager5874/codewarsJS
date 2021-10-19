function minimumSteps(numbers, value) {
  //your code here
  let sum = 0;
  let counter = 0;
  while (sum < value) {
    let min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    sum += min;
    counter++;
  }
  return counter - 1;
}

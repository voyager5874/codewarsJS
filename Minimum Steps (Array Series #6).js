function minimumSteps(numbers, value) {
  const sortedNumbers = numbers.sort((a, b) => a - b); //sort() is not what you might think
  for (let i = 0, sum = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum >= value) {
      return i;
    }
  }
}

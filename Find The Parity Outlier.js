function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;
  const isOdd = (num) => num % 2 !== 0;
  const isEven = (num) => num % 2 === 0;
  for (let i = 0; i < 3; i++) {
    if (isEven(integers[i])) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  if (evenCount >= 2) {
    let i = 0;
    while (true) {
      if (isOdd(integers[i])) return integers[i];
      i++;
    }
  }
  if (oddCount >= 2) {
    let i = 0;
    while (true) {
      if (isEven(integers[i])) return integers[i];
      i++;
    }
  }
}

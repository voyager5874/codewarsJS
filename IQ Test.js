function iqTest(numbers) {
  console.log(numbers);
  const arr = numbers.split(" ").map(Number);
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < 3; i++) {
    arr[i] % 2 === 0 ? evenCount++ : oddCount++;
  }
  if (evenCount > 1) {
    let i = 0;
    while (true) {
      if (arr[i] % 2 !== 0) return arr.indexOf(arr[i]) + 1;
      i++;
    }
  }
  if (oddCount > 1) {
    let i = 0;
    while (true) {
      if (arr[i] % 2 === 0) return arr.indexOf(arr[i]) + 1;
      i++;
    }
  }
}

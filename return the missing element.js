function getMissingElement(superImportantArray) {
  const arr = superImportantArray.sort();
  if (arr[0] !== 0) {
    return 0;
  }
  if (arr[arr.length - 1] !== 9) {
    return 9;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 !== arr[i - 1]) {
      return i;
    }
  }
}

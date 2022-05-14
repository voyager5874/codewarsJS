function pickPeaks(arr) {
  const result = {
    pos: [],
    peaks: [],
  };
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
      result.pos.push(i);
      result.peaks.push(arr[i]);
    }
    if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
      const plateauEnd = findPlateauEnd(arr.slice(i + 1), arr[i]);
      if (plateauEnd) {
        result.pos.push(i);
        result.peaks.push(arr[i]);
        i = plateauEnd + i;
      }
    }
  }
  return result;
}

function findPlateauEnd(arr, plateauValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > plateauValue) return null;
    if (arr[i] < plateauValue) {
      return i;
    }
  }
  return null;
}

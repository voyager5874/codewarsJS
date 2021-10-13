function missingValues(arr) {
  //coding and coding..
  const xyHolder = [];
  let x;
  let y;
  let i = 0;
  while (xyHolder.length < 2) {
    const arrayToPush = arr.filter((item) => arr[i] === item);
    if (
      arrayToPush.length === 1 ||
      (arrayToPush.length === 2 && !xyHolder.some((item) => item.length === 2))
    ) {
      xyHolder.push(arrayToPush);
    }
    i++;
  }
  console.log(xyHolder);
  xyHolder.forEach((item) => {
    if (item.length === 1) {
      x = item[0];
    }
    if (item.length === 2) {
      y = item[0];
    }
  });
  return x * x * y;
}

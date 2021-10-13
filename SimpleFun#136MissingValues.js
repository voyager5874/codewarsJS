function missingValues(arr) {
  const x = arr.find(
    (item) => arr.filter((element) => element === item).length === 1
  );
  const y = arr.find(
    (item) => arr.filter((element) => element === item).length === 2
  );
  return x * x * y;
}

//console.log(missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200]));

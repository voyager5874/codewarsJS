function findOdd(A) {
  const data = {};
  A.forEach((number) => {
    if (data.hasOwnProperty(number)) {
      data[number] += 1;
    }
    if (!data.hasOwnProperty(number)) {
      data[number] = 1;
    }
  });
  for (const prop in data) {
    if (data[prop] % 2 !== 0) {
      return Number(prop);
    }
  }
  return 0;
}

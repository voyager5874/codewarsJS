function switchDict(dic) {
  const swapped = {};
  Object.entries(dic)
    .map((item) => item.reverse())
    .forEach((pair) => {
      if (!swapped.hasOwnProperty(pair[0])) {
        swapped[pair[0]] = [pair[1]];
        return;
      } else {
        swapped[pair[0]].push(pair[1]);
      }
    });

  return swapped;
}

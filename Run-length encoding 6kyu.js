var runLengthEncoding = function (str) {
  const result = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result.push([count, str[i]]);
      count = 1;
    }
  }
  return result;
};

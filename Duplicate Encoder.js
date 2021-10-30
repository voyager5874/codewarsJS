function duplicateEncode(word) {
  const string = word.toLowerCase().split("");
  const data = {};
  let res = [];
  string.forEach((char) => {
    if (data.hasOwnProperty(char)) {
      data[char] += 1;
    }
    if (!data.hasOwnProperty(char)) {
      data[char] = 1;
    }
  });
  string.forEach((char) => {
    if (data[char] === 1) {
      res.push("(");
    }
    if (data[char] > 1) {
      res.push(")");
    }
  });
  return res.join("");
}

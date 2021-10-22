function spinWords(string) {
  const arr = string.split(" ");
  const res = [];
  arr.forEach((word) => {
    if (word.length >= 5) {
      res.push(word.split("").reverse().join(""));
    } else {
      res.push(word);
    }
  });
  return res.join(" ");
}

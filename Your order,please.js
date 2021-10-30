function order(words) {
  if (words === "") return words;
  const wordsArr = words.split(" ");
  const res = [...Array(wordsArr.length).keys()];
  wordsArr.forEach((word) => {
    let pos = Number(word.match(/\d+/)) - 1;
    res[pos] = word;
  });
  return res.join(" ");
}

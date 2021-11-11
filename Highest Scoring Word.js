function high(x) {
  const scores = {};
  const words = x.split(" ");
  for (let word of words) {
    scores[word] = wordScore(word);
  }
  let maxScore = Math.max(...Object.values(scores));
  return Object.keys(scores).find((key) => scores[key] === maxScore);
}

function wordScore(word) {
  const SHIFT = 96; // 'a' code is 97
  const position = (char) => char.charCodeAt(0) - SHIFT;
  return word
    .split("")
    .reduce((total, current) => total + position(current), 0);
}

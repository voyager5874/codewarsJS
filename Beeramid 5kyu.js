// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
  const boughtCans = Math.floor(bonus / price);
  let levels = 0;
  let usedCans = 0;
  while (true) {
    usedCans = getCansCount(levels);
    if (usedCans < boughtCans && boughtCans >= getCansCount(levels + 1)) {
      levels++;
    } else {
      return levels;
    }
  }
};

function getCansCount(levelsCount) {
  // https://en.wikipedia.org/wiki/Square_pyramidal_number
  return (levelsCount * (levelsCount + 1) * (2 * levelsCount + 1)) / 6;
}

function sc(width, length, gaps) {
  const cells = 2 * width + 2 * length - 4; //corners have to be counted once
  let treesCount = cells / (gaps + 1);
  return Number.isInteger(treesCount) ? treesCount : 0;
}

// There is a rectangular land and we need to plant trees on the edges of that land.
// I will give you three parameters:
// width and length, two integers > 1 that represents the land's width and length;
// gaps, an integer >= 0, that is the distance between two trees.
// Return how many trees have to be planted, if you can't achieve a symmetrical layout(see Example 3) then return 0.

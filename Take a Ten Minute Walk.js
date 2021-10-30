function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  const directions = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };
  walk.forEach((direction) => (directions[direction] += 1));
  if (directions.w === directions.e && directions.n === directions.s) {
    return true;
  }
  return false;
}

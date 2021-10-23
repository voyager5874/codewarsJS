let number = function (busStops) {
  let res = 0;
  const arr = busStops.forEach((busStop) => {
    res += busStop[0];
    res -= busStop[1];
  });
  return res;
};

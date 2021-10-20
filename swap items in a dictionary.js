function switchDict(dic) {
  let keys = [...new Set(Object.keys(dic))];
  const dic2 = {};

  keys.forEach((i) =>
    dic2[dic[i]] ? dic2[dic[i]].push(i) : (dic2[dic[i]] = [i])
  );

  return dic2;
}

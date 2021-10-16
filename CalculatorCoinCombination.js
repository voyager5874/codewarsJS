var coinCombo = function (amount) {
  const INF = 100000;

  //k is number of denominations of the coin or length of d

  const d = [1, 5, 10, 25];
  const k = d.length;
  let n = amount;
  const resByValues = [];

  const M = Array(0).fill(n + 1);
  const S = Array(0).fill(n + 1);

  for (let j = 1; j < n + 1; j++) {
    let minimum = INF;
    let coin = 0;

    for (let i = 1; i < k + 1; i++) {
      if (j >= d[i]) {
        minimum = Math.min(minimum, 1 + M[j - d[i]]);
        coin = i;
      }
    }
    M[j] = minimum;
    S[j] = coin;
  }
  let l = n;
  while (l > 0) {
    //console.log(d[S[l]]);
    resByValues.push(d[S[l]]);

    l = l - d[S[l]];
  }
  const resByCoinCount = [0, 0, 0, 0];
  d.forEach((item, index) => {
    resByValues.forEach((value) => {
      if (value === item) {
        console.log(resByCoinCount);
        console.log(`${index} +1`);
        resByCoinCount[index] += 1;
        console.log(resByCoinCount);
      }
    });
  });
  return resByCoinCount;
};

function findUniq(arr) {
  let arrN = arr.map((str) => str.toLowerCase());
  const inputAnalisis = [];
  for (let i = 0; i < arrN.length; i++) {
    let letters = {};
    for (let j = 0; j < arrN[i].length; j++) {
      if (arrN[i][j].trim()) {
        letters[arrN[i][j]]
          ? (letters[arrN[i][j]] += 1)
          : (letters[arrN[i][j]] = 1);
      }
    }
    inputAnalisis.push(letters);
  }
  let res = [];
  if (inputAnalisis.some((item) => Object.keys(item).length === 0)) {
    inputAnalisis.forEach((item) => {
      if (Object.keys(item).length) {
        res.push("string");
      } else {
        res.push("*");
      }
    });
    return arr[
      res.findIndex((char) => res.indexOf(char) === res.lastIndexOf(char))
    ];
  }

  if (inputAnalisis.every((item) => Object.keys(item).length === 1)) {
    inputAnalisis.forEach((item) => res.push(...Object.keys(item)));
    return arr[
      res.findIndex((char) => res.indexOf(char) === res.lastIndexOf(char))
    ];
  }
  arrN.forEach((str) => res.push(str.split("").sort().join("").trim()));
  return arr[res.findIndex((str) => res.indexOf(str) === res.lastIndexOf(str))];
}

function findAllChars(matrix) {
  return [...new Set(matrix.reduce((acc, val) => acc.concat(val), []))];
  //return [... new Set(matrix.flat())];
}

function wordIsFound(arr, matrix) {
  return matrix.every(
    (triplet) =>
      arr.filter((char) => triplet.includes(char)).join() === triplet.join()
  ); //json stringify?
}

var recoverSecret = function (triplets) {
  res = findAllChars(triplets);
  if (!res) {
    throw new Error("Letters were not found");
  }
  do {
    triplets.forEach((triplet) => {
      if (
        triplet.join() !== res.filter((char) => triplet.includes(char)).join()
      ) {
        let a = res.findIndex((letter) => triplet.includes(letter));
        let b = res.findIndex(
          (letter) => triplet.includes(letter) && letter !== res[a]
        );
        let c = res.findIndex(
          (letter) =>
            triplet.includes(letter) && letter !== res[a] && letter !== res[b]
        );
        res[a] = triplet[0];
        res[b] = triplet[1];
        res[c] = triplet[2];
      }
    });
  } while (!wordIsFound(res, triplets));
  return res.join("");
};

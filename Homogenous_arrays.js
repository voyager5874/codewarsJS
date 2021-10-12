function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  return arrays.filter((array) => {
    if (
      array.every((item) => typeof array[0] === typeof item) &&
      array.length !== 0
    ) {
      return array;
    }
  });
}

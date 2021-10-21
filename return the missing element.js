function getMissingElement(superImportantArray) {
  return superImportantArray.reduce(function (sum, value) {
    return sum - value;
  }, 45);
}

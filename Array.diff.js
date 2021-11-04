function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    while (a.indexOf(b[i]) !== -1) {
      a.splice(a.indexOf(b[i]), 1);
    }
  }
  return a;
}

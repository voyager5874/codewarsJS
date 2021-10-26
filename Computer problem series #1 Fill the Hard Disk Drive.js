function save(sizes, hd) {
  if (sizes[0] > hd) {
    return 0;
  }
  let i = 0;
  let written = 0;

  while (i < sizes.length) {
    written += sizes[i];
    if (written > hd) {
      return i;
    }
    if (written === hd) {
      return i + 1;
    }
    i++;
  }
  return sizes.length;
}

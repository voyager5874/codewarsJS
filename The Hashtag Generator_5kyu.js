function generateHashtag(str) {
  if (!str.trim()) return false;
  while (str.indexOf("  ") !== -1) {
    str = str.replace("  ", " ");
  }
  const res =
    "#" +
    str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
  return res.length === 1 || res.length > 140 ? false : res;
}

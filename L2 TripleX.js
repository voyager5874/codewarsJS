function tripleX(str) {
  let firstIndex = str.indexOf("x");
  return firstIndex !== -1 && firstIndex === str.indexOf("xxx");
}

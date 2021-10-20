function tripleX(str) {
  let firstIndex = str.indexOf("x");
  return (
    `${str[firstIndex]}${str[firstIndex + 1]}${str[firstIndex + 2]}` === "xxx"
  );
}

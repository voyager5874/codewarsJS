function findMissingLetter(array) {
  const firstCharCode = array[0].charCodeAt(0);
  let res = array.filter(
    (char, index) => char.charCodeAt(0) !== index + firstCharCode
  );
  return String.fromCharCode(res[0].charCodeAt(0) - 1);
}

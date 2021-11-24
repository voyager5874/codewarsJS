function rot13(message) {
  return message
    .split("")
    .map((letter) => String.fromCharCode(getCharCode(letter)))
    .join("");
}

const getCharCode = (char) => {
  const SHIFT = 13;
  const lowerA = 97;
  const lowerZ = 122;
  const upperA = 65;
  const upperZ = 90;
  const charCode = char.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122)
    return charCode + SHIFT <= lowerZ
      ? charCode + SHIFT
      : ((charCode + SHIFT) % lowerZ) + lowerA - 1;
  if (charCode >= 65 && charCode <= 90)
    return charCode + SHIFT <= upperZ
      ? charCode + SHIFT
      : ((charCode + SHIFT) % upperZ) + upperA - 1;
  return charCode;
};

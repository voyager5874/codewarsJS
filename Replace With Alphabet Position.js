function alphabetPosition(text) {
  const string = text.toLowerCase(); // using lower case letters ASCII codes
  const SHIFT = 96; // 'a' code is 97
  const position = (char) => char.charCodeAt(0) - SHIFT;
  let res = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() != string[i].toUpperCase()) {
      // is current item a letter?
      res.push(position(string[i]));
    }
  }
  return res.join(" ");
}

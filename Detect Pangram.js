function isPangram(string) {
  if (string.length < 26) return false;
  const found = {};
  const ascii = Array(26)
    .fill(0)
    .map((element, index) => index + 97);
  const alphabet = ascii.map((element) => String.fromCharCode(element));
  for (const key of alphabet) {
    found[key] = false;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() !== string[i].toUpperCase()) {
      found[string[i].toLowerCase()] = true;
    }
  }
  for (let char in found) {
    if (found[char] === false) return false;
  }
  return true;
}

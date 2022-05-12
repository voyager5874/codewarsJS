function scramble(str1, str2) {
  let letters = {};
  for (let letter of str1) {
    letters[letter] ? letters[letter]++ : (letters[letter] = 1);
  }
  for (let letter of str2) {
    if (letters[letter]) letters[letter]--;
    else return false;
  }
  return true;
}

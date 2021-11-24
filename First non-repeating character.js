function firstNonRepeatingLetter(s) {
  if (s.length < 1) return s;
  let str = s.toLowerCase();
  let char =
    str
      .split("")
      .find((letter) => str.indexOf(letter) === str.lastIndexOf(letter)) || "";
  return char ? s[str.indexOf(char)] : char;
}

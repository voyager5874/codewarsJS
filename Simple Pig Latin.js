function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.toLowerCase() !== word.toUpperCase())
        return word.slice(1) + word[0] + "ay";
      else return word;
    })
    .join(" ");
}

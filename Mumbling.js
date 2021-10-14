function accum(s) {
  // your code
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    result += s[i].toLowerCase().repeat(i);
    if (i !== s.length - 1) result += "-";
  }
  return result;
}

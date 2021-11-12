function validParentheses(parens) {
  let str = parens;
  while (str.indexOf("()") !== -1) {
    str = str.replace("()", "");
  }
  return str.length === 0;
}

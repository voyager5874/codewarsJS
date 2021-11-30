// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) {
  let str = braces;
  while (
    str.indexOf("()") !== -1 ||
    str.indexOf("[]") !== -1 ||
    str.indexOf("{}") !== -1
  ) {
    str = str.replace("()", "");
    str = str.replace("[]", "");
    str = str.replace("{}", "");
  }
  return str.length === 0;
}

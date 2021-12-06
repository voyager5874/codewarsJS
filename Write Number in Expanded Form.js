function expandedForm(num) {
  let numDigits = num.toString().split("").map(Number);
  let pow10 = numDigits.length - 1;
  let res = [];
  for (let i = pow10, j = 0; i >= 0; i--, j++) {
    if (numDigits[j]) res.push(Math.pow(10, i) * numDigits[j]);
    num -= Math.pow(10, i) * numDigits[j];
  }
  return res.join(" + ");
}

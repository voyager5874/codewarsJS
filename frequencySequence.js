// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

function freqSeq(str, sep) {
  const count = {};
  //const array = str.split('').filter(item=> item !== ' ');
  const array = str.split("");
  let res = "";
  array.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
      return;
    }
    count[item] = 1;
  });
  array.forEach((item, index) => {
    if (index <= array.length - 2) {
      res += count[item];
      res += sep;
    } else {
      res += count[item];
    }
  });
  return res;
}

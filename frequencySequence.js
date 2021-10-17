// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

function freqSeq(str, sep) {
  return str
    .split("")
    .map((char, index, arr) => arr.filter((item) => char === item).length)
    .join(sep);
}

function mergeArrays(a, b) {
  // your code here
  const longArrayLength = a.length > b.length ? a.length : b.length;
  const mix = [];
  for (let i = 0; i < longArrayLength; i++) {
    if (a.hasOwnProperty(i)) mix.push(a[i]); //won't work for falsey values
    if (b.hasOwnProperty(i)) mix.push(b[i]);
  }
  return mix;
}

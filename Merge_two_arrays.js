function mergeArrays(a, b) {
  // your code here
  const shortArray = a.length < b.length ? a : b;
  const longArray = a.length > b.length ? a : b;
  const shortArrayLength = shortArray.length;
  const mix = [];
  for (let i = 0; i < shortArrayLength; i++) {
    mix.push(a[i]);
    mix.push(b[i]);
  }
  return [...mix, ...longArray.slice(shortArray.length)];
}

function tripleX(str) {
  let regex = /^[^x]*xxx/;
  return regex.test(str);
}

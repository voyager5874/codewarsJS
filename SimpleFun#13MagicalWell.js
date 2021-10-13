function magicalWell(a, b, n) {
  //coding and coding..
  let money = 0;
  for (let i = 0; i < n; i++) {
    money += (a + i) * (b + i);
    console.log(money);
  }
  return money;
}

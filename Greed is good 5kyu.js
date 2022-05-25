function score(dice) {
  let result = 0;
  const roll = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  for (let value of dice) {
    roll[value] += 1;
  }
  for (let prop in roll) {
    if (roll[prop] >= 3 && prop !== "1") {
      result += 100 * Number(prop);
      if (prop === "5") result += 50 * (roll[prop] % 3);
    }
    if (roll[prop] >= 3 && prop === "1") {
      result += 1000;
      result += 100 * (roll[prop] % 3);
    }
    if (roll[prop] < 3 && ["1", "5"].includes(prop))
      result += prop === "1" ? roll[prop] * 100 : roll[prop] * 50;
  }
  return result;
}

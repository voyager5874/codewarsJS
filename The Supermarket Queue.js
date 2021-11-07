function queueTime(customers, n) {
  if (n === 1)
    return customers.reduce((total, current) => {
      return total + current;
    }, 0);
  if (customers.length === 0) return 0;
  if (customers.length < n) return Math.max(...customers);
  let sameTimeCheck = true;
  for (let i = 0; i < customers.length; i += n) {
    if (!customers.slice(i, i + n).every((item) => item === item[0])) {
      sameTimeCheck = false;
      break;
    }
  }
  if (sameTimeCheck) {
    return (
      customers.reduce((total, current) => {
        return total + current;
      }, 0) / n
    );
  }
  let tills = customers.slice(0, n);
  const res = tills.slice();
  for (let i = n; i < customers.length; i++) {
    while (!tills.some((item) => item === 0)) {
      tills = tills.map((item) => (item -= 1));
    }
    let freeTill = tills.indexOf(0);
    res[freeTill] += customers[i];
    tills[freeTill] = customers[i];
  }
  return Math.max(...res);
}

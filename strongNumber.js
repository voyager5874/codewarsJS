// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

function strong(n) {
  let numbers = Array.from(n.toString()).map(Number);
  let sumOfFactorials = numbers
    .map((number) => {
      let factorial = number;
      if (number === 0) {
        return 1;
      }
      while (number > 1) {
        number--;
        factorial *= number;
      }
      return factorial;
    })
    .reduce((total, current) => {
      return total + current;
    }, 0);
  return sumOfFactorials === n ? "STRONG!!!!" : "Not Strong !!";
}

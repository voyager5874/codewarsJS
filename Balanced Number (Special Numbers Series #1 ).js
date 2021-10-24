function balancedNum(number) {
  const arr = number.toString().split("").map(Number);
  console.log(arr);
  if (arr.length <= 2) {
    return "Balanced";
  }
  if (arr.length % 2 !== 0) {
    let middle = Math.floor(arr.length / 2);
    let half1 = arr.slice(0, middle);
    let half2 = arr.slice(middle + 1);
    let sum1 = half1.reduce((total, current) => {
      return total + current;
    }, 0);
    let sum2 = half2.reduce((total, current) => {
      return total + current;
    }, 0);
    if (sum1 === sum2) {
      return "Balanced";
    }
  }
  if (arr.length % 2 === 0) {
    let middle = arr.length / 2;
    let half1 = arr.slice(0, middle - 1);
    let half2 = arr.slice(middle + 1);
    let sum1 = half1.reduce((total, current) => {
      return total + current;
    }, 0);
    let sum2 = half2.reduce((total, current) => {
      return total + current;
    }, 0);
    if (sum1 === sum2) {
      return "Balanced";
    }
  }
  return "Not Balanced";
}

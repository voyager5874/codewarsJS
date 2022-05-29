function solution(list) {
  list.sort((a, b) => a - b);
  list = list.map((value, i) =>
    list[i - 1] === value - 1 && list[i + 1] === value + 1 ? "-" : value
  );
  list = list
    .filter((value, i) => value != "-" || list[i - 1] != "-")
    .join(",");
  while (list.includes(",-,")) {
    list = list.replace(",-,", "-");
  }
  return list;
}

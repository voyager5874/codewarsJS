function dirReduc(arr) {
  let route = arr.join("-");
  do {
    route = route.replace("SOUTH-NORTH", "");
    route = route.replace("NORTH-SOUTH", "");
    route = route.replace("WEST-EAST", "");
    route = route.replace("EAST-WEST", "");
    route = route.replace("--", "-");
    if (route.startsWith("-")) route = route.slice(1);
    if (route.endsWith("-")) route = route.slice(0, route.length - 1);
  } while (
    route.includes("SOUTH-NORTH") ||
    route.includes("NORTH-SOUTH") ||
    route.includes("EAST-WEST") ||
    route.includes("WEST-EAST") ||
    route.includes("--") ||
    route.endsWith("-") ||
    route.startsWith("-")
  );
  return route.length > 1 ? route.split("-") : [];
}

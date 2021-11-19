function cakes(recipe, available) {
  let res;
  for (let ingredient in recipe) {
    let possibleCount = Math.floor(available[ingredient] / recipe[ingredient]);
    if (!available.hasOwnProperty(ingredient) || available[ingredient] === 0) {
      return 0;
    }
    if (res > possibleCount || res === undefined) {
      res = possibleCount;
    }
  }
  return res;
}

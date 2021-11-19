function anagrams(word, words) {
  return words.filter((item) =>
    compareTwoObjects(analisis(word), analisis(item))
  );
}

const analisis = (string) => {
  const arr = string.split("");
  const obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};

const compareTwoObjects = (obj1, obj2) => {
  for (let prop in obj1) {
    if (obj1[prop] !== obj2[prop] || !obj2.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

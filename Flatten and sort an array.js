"use strict";

function flattenAndSort(array) {
  return array
    .reduce((acc, item) => acc.concat(item), [])
    .sort((a, b) => a - b);
}

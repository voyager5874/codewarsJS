const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);

const getUniques = x => [...new Set([...x.toLowerCase()].sort())].join('');

const findUniq = arr => arr[arr.map(getUniques).findIndex(unique)];